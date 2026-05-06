const { prefix, permissions, timers } = require("../config/server.config");
const { memberHasAnyRole } = require("../utils/permissionUtils");
const { safeDelete, deleteLater, sendTemporaryMessage } = require("../utils/messageUtils");
const { logCommandUsage } = require("../services/logService");

module.exports = {
    name: "adminhelp",
    description: "A simple help command for admins.",

    async execute(msg, args) {
        if (!memberHasAnyRole(msg.member, permissions.adminCommands)) {
            await safeDelete(msg);

            await sendTemporaryMessage(
                msg.channel,
                "Sorry Zero beat me until I learned not to let your user group access this command. I won't make that mistake again so come back when you are an OG or Admin."
            );

            return;
        }

        await safeDelete(msg);

        const reply = await msg.channel.send(
            "Currently, there are 9 possible admin commands - \n" +
            "```\n" +
            `${prefix}adminhelp\n` +
            `${prefix}detailedadminhelp\n` +
            `${prefix}kick\n` +
            `${prefix}ban\n` +
            `${prefix}purge\n` +
            `${prefix}new_gameassignment\n` +
            `${prefix}new_helpme\n` +
            `${prefix}new_veil\n` +
            `${prefix}new_welcome` +
            "```"
        );

        deleteLater(reply, timers.helpMessageDelete);

        await logCommandUsage(msg, `${prefix}adminhelp`);
    }
};