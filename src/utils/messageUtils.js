const { timers } = require("../config/server.config");

function deleteLater(message, delayMs = timers.normalMessageDelete) {
    setTimeout(() => {
        message.delete().catch(() => {});
    }, delayMs);
}

async function safeDelete(message) {
    if (!message) return;
    await message.delete().catch(() => {});
}

async function sendTemporaryMessage(channel, text, delayMs = timers.normalMessageDelete) {
    const reply = await channel.send(text);
    deleteLater(reply, delayMs);
    return reply;
}

module.exports = {
    deleteLater,
    safeDelete,
    sendTemporaryMessage
};