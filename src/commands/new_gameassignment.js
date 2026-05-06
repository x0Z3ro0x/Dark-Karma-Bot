const { prefix, channels, emojis, permissions, messages } = require("../config/server.config");
const { memberHasAnyRole } = require("../utils/permissionUtils");
const { sendTemporaryMessage } = require("../utils/messageUtils");
const { logCommandUsage } = require("../services/logService");

async function safeReact(message, emoji) {
    if (!emoji) return;
    await message.react(emoji).catch(console.error);
}

module.exports = {
    name: "new_gameassignment",
    description: "Admin command for placing a new game assignment message.",

    async execute(msg, args) {
        if (!memberHasAnyRole(msg.member, permissions.ownerOnlyCommands)) {
            await sendTemporaryMessage(msg.channel, "Sorry Zero beat me until I learned not to let your user group access this command. I won't make that mistake again so come back when you are an OG or Admin.");
            return;
        }

        const targetChannel = msg.client.channels.cache.get(channels.gameAssignment);
        if (!targetChannel) {
            await msg.channel.send("I could not find the game assignment channel.");
            return;
        }

        const sentMessage = await targetChannel.send(messages.gameAssignment);

        await safeReact(sentMessage, msg.guild.emojis.cache.find(e => e.name === emojis.mc));
        await safeReact(sentMessage, msg.guild.emojis.cache.find(e => e.name === emojis.ark));
        await safeReact(sentMessage, msg.guild.emojis.cache.find(e => e.name === emojis.cs));
        await safeReact(sentMessage, msg.guild.emojis.cache.find(e => e.name === emojis.gamertag));
        await safeReact(sentMessage, msg.guild.emojis.cache.find(e => e.name === emojis.twitch));

        await logCommandUsage(msg, `${prefix}new_gameassignment`);
    }
};