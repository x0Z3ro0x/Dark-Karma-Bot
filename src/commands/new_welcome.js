const { prefix, channels, emojis, permissions, messages } = require("../config/server.config");
const { memberHasAnyRole } = require("../utils/permissionUtils");
const { sendTemporaryMessage } = require("../utils/messageUtils");
const { logCommandUsage } = require("../services/logService");

async function safeReact(message, emoji) {
    if (!emoji) return;
    await message.react(emoji).catch(console.error);
}

module.exports = {
    name: "new_welcome",
    description: "Admin command for placing a new welcome message.",

    async execute(msg, args) {
        if (!memberHasAnyRole(msg.member, permissions.ownerOnlyCommands)) {
            await sendTemporaryMessage(msg.channel, "Sorry Zero beat me until I learned not to let your user group access this command. I won't make that mistake again so come back when you are an OG or Admin.");
            return;
        }

        const targetChannel = msg.client.channels.cache.get(channels.welcome);
        if (!targetChannel) {
            await msg.channel.send("I could not find the welcome channel.");
            return;
        }

        const sentMessage = await targetChannel.send(messages.welcome);
        await safeReact(sentMessage, msg.guild.emojis.cache.find(e => e.name === emojis.dkg));

        await logCommandUsage(msg, `${prefix}new_welcome`);
    }
};