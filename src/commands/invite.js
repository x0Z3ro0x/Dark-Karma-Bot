const { prefix, moderation } = require("../config/server.config");
const { logCommandUsage } = require("../services/logService");

module.exports = {
    name: "invite",
    description: "A command to post the server invite link",

    async execute(msg, args) {
        const inviteLink = moderation.allowedLinks[0] || "No invite link configured.";

        await msg.channel.send(inviteLink);

        await logCommandUsage(msg, `${prefix}invite`);
    }
};