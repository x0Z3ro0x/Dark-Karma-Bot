const { prefix, permissions } = require("../config/server.config");
const { memberHasAnyRole } = require("../utils/permissionUtils");
const { safeDelete, sendTemporaryMessage } = require("../utils/messageUtils");
const { logCommandUsage, logCommandAttempt } = require("../services/logService");

module.exports = {
    name: "purge",
    description: "An admin command to purge messages",

    async execute(msg, args) {
        if (!memberHasAnyRole(msg.member, permissions.purgeCommands)) {
            await sendTemporaryMessage(
                msg.channel,
                "Sorry Zero beat me until I learned not to let your user group access this command."
            );

            await logCommandAttempt(msg, `${prefix}purge`);
            return;
        }

        const amount = Number(args[0]) || 10;
        const purgeAmount = Math.min(Math.max(amount, 1), 100);

        await safeDelete(msg);

        try {
            const messages = await msg.channel.messages.fetch({ limit: purgeAmount });
            await msg.channel.bulkDelete(messages, true);
        } catch (err) {
            console.error("[PURGE COMMAND] Failed:", err);
            await msg.channel.send("Something went wrong while purging messages.");
            return;
        }

        await logCommandUsage(msg, `${prefix}purge ${purgeAmount}`);
    }
};