const {
    blockedWords,
    ignoredWordChannels
} = require("../config/moderation.config");

const { logRemovedMessage } = require("./logService");

async function handleBlockedWords(msg) {
    if (msg.author.bot) return false;
    if (ignoredWordChannels.includes(msg.channel.id)) return false;

    const msgContent = msg.content.toLowerCase();

    const matchedWord = blockedWords.find(word => msgContent.includes(word));
    if (!matchedWord) return false;

    await msg.delete();

    msg.channel.send(`Please stop cussing, <@${msg.author.id}>!`)
        .then(reply => reply.delete({ timeout: 12000 }))
        .catch(console.error);

    logRemovedMessage(msg.client, msg.author.id, msg.content);

    return true;
}

module.exports = {
    handleBlockedWords
};