const {
    blockedWords,
    ignoredWordChannels
} = require("../config/moderation.config");

const { logRemovedMessage } = require("./logService");
const { safeDelete, sendTemporaryMessage } = require("../utils/messageUtils");
const { timers } = require("../config/server.config");

function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[\u200B-\u200D\uFEFF]/g, "")
        .replace(/[^a-z0-9]/g, "");
}

async function handleBlockedWords(msg) {
    if (msg.author.bot) return false;
    if (ignoredWordChannels.includes(msg.channel.id)) return false;

    const normalizedContent = normalizeText(msg.content);

    const matchedWord = blockedWords.find(word =>
        normalizedContent.includes(normalizeText(word))
    );

    if (!matchedWord) return false;

    await safeDelete(msg);

    await sendTemporaryMessage(
        msg.channel,
        `Please stop cussing, <@${msg.author.id}>!`,
        timers.shortMessageDelete
    );

    await logRemovedMessage(msg.client, msg.author.id, msg.content);

    return true;
}

module.exports = {
    handleBlockedWords
};