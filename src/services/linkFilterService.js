const {
    ignoredLinkChannels,
    linkTriggers,
    allowedLinks,
    allowedLinkRoleIds
} = require("../config/moderation.config");

const { logRemovedMessage } = require("./logService");
const { safeDelete, sendTemporaryMessage } = require("../utils/messageUtils");
const { timers } = require("../config/server.config");

function memberHasAllowedLinkRole(member) {
    if (!member || !member.roles || !member.roles.cache) return false;
    return allowedLinkRoleIds.some(roleId => member.roles.cache.has(roleId));
}

function normalizeForLinkDetection(text) {
    return text
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[\u200B-\u200D\uFEFF]/g, "")
        .replace(/\s+/g, "")
        .replace(/\(dot\)|\[dot\]|\{dot\}/g, ".")
        .replace(/\(period\)|\[period\]|\{period\}/g, ".")
        .replace(/,/g, ".");
}

function isAllowedLink(contentLower) {
    return allowedLinks.some(link => contentLower.includes(link.toLowerCase()));
}

function containsLinkTrigger(normalizedContent) {
    return linkTriggers.some(trigger =>
        normalizedContent.includes(trigger.toLowerCase())
    );
}

function hasDiscordMarkdownLink(contentLower) {
    return /\[[^\]]+\]\((https?:\/\/|www\.|[^)]+\.[a-z]{2,})[^)]*\)/i.test(contentLower);
}

async function removeLinkMessage(msg, warningText) {
    await safeDelete(msg);

    await sendTemporaryMessage(
        msg.channel,
        warningText,
        timers.shortMessageDelete
    );

    await logRemovedMessage(msg.client, msg.author.id, msg.content);
}

async function handleLinkFilter(msg) {
    if (msg.author.bot) return false;
    if (ignoredLinkChannels.includes(msg.channel.id)) return false;

    const content = msg.content;
    const contentLower = content.toLowerCase();
    const normalizedContent = normalizeForLinkDetection(content);

    if (!containsLinkTrigger(normalizedContent) && !hasDiscordMarkdownLink(contentLower)) {
        return false;
    }

    if (memberHasAllowedLinkRole(msg.member)) return false;
    if (isAllowedLink(contentLower)) return false;

    await removeLinkMessage(
        msg,
        `<@${msg.author.id}>, I detected a link that is not allowed here. Removing now...\n\nContinuing to post unauthorized links may result in moderation action.`
    );

    return true;
}

module.exports = {
    handleLinkFilter
};