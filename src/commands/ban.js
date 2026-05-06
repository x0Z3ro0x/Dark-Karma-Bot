const { prefix, permissions } = require("../config/server.config");
const { memberHasAnyRole } = require("../utils/permissionUtils");
const { safeDelete, sendTemporaryMessage } = require("../utils/messageUtils");
const { logCommandUsage } = require("../services/logService");

module.exports = {
    name: "ban",
    description: "An admin command to ban users.",

    async execute(msg, args) {
        if (!memberHasAnyRole(msg.member, permissions.adminCommands)) {
            await safeDelete(msg);

            await sendTemporaryMessage(
                msg.channel,
                "Sorry Zero beat me until I learned not to let your user group access this command. I won't make that mistake again so come back when you are an OG or Admin."
            );

            return;
        }

        const mentionMember = msg.mentions.members.first();

        if (!mentionMember) {
            await safeDelete(msg);
            await sendTemporaryMessage(msg.channel, "You need to give me a user to ban!");
            return;
        }

        const requesterHighestRole = msg.member.roles.highest;
        const targetHighestRole = mentionMember.roles.highest;

        if (targetHighestRole.position >= requesterHighestRole.position) {
            await safeDelete(msg);

            await sendTemporaryMessage(
                msg.channel,
                `${mentionMember.user.username} is above you. You may only ban users beneath your user group.`
            );

            return;
        }

        if (!mentionMember.bannable) {
            await safeDelete(msg);

            await sendTemporaryMessage(
                msg.channel,
                "Woah! That user is far too strong for me to ban!"
            );

            return;
        }

        await safeDelete(msg);

        try {
            await mentionMember.ban();
        } catch (err) {
            console.error("[BAN COMMAND] Failed to ban user:", err);
            await sendTemporaryMessage(msg.channel, "I tried to ban that user, but something went wrong.");
            return;
        }

        await sendTemporaryMessage(
            msg.channel,
            `<@${mentionMember.user.id}> has been steam rolled out of the Discord server. Bye Felicia.`
        );

        await logCommandUsage(msg, `${prefix}ban`);
    }
};