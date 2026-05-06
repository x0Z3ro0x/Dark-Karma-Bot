const { channels } = require("../config/server.config");

async function sendLog(client, text) {
    if (!channels.moderationLog) return;

    const logChannel = client.channels.cache.get(channels.moderationLog);
    if (!logChannel) {
        console.warn(`[LOG] Could not find moderation log channel: ${channels.moderationLog}`);
        return;
    }

    await logChannel.send(text).catch(console.error);
}

async function logCommandUsage(msg, commandText) {
    await sendLog(
        msg.client,
        `${msg.author.username} just used command - \`\`\`${commandText}\`\`\``
    );
}

async function logCommandAttempt(msg, commandText) {
    await sendLog(
        msg.client,
        `${msg.author.username} just tried using command - \`\`\`${commandText}\`\`\``
    );
}

async function logRemovedMessage(client, authorId, content) {
    await sendLog(
        client,
        "I just removed some content posted by - \n\n" +
        `<@${authorId}>` +
        "\n\nHere is the content I removed -\n\n```" +
        content +
        "```"
    );
}

module.exports = {
    sendLog,
    logCommandUsage,
    logCommandAttempt,
    logRemovedMessage
};