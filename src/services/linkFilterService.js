const {
    ignoredLinkChannels,
    linkTriggers,
    allowedLinks,
    allowedLinkRoleIds
} = require("../config/moderation.config");

const { logRemovedMessage } = require("./logService");

function memberHasAllowedLinkRole(member) {
    if (!member || !member.roles || !member.roles.cache) return false;

    return allowedLinkRoleIds.some(roleId => member.roles.cache.has(roleId));
}

function isAllowedLink(contentLower) {
    return allowedLinks.some(link => contentLower.includes(link.toLowerCase()));
}

function containsLinkTrigger(contentLower) {
    return linkTriggers.some(trigger => contentLower.includes(trigger));
}

async function removeLinkMessage(msg, warningText) {
    await msg.delete();

    msg.channel.send(warningText)
        .then(reply => reply.delete({ timeout: 12000 }))
        .catch(console.error);

    logRemovedMessage(msg.client, msg.author.id, msg.content);
}

async function handleLinkFilter(msg) {
    if (msg.author.bot) return false;
    if (ignoredLinkChannels.includes(msg.channel.id)) return false;

    const content = msg.content;
    const contentLower = content.toLowerCase();

    if (!containsLinkTrigger(contentLower)) return false;

    const member = msg.member;

    if (memberHasAllowedLinkRole(member)) return false;
    if (isAllowedLink(contentLower)) return false;

    if (content.includes("\n")) {
        await removeLinkMessage(
            msg,
            "I detected a break in your link. Fix this and try to post your link again."
        );
        return true;
    }

    if (content.includes(" ")) {
        await removeLinkMessage(
            msg,
            "I detected spacing in your link. Fix this and try to post your link again."
        );
        return true;
    }

    await removeLinkMessage(
        msg,
        `<@${msg.author.id}>, I have detected an illegal link. Removing now...\n\nContinuing to post these links will result in a ban.`
    );

    return true;
}

module.exports = {
    handleLinkFilter
};