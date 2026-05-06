const { prefix, permissions, timers } = require("../config/server.config");
const { memberHasAnyRole } = require("../utils/permissionUtils");
const { safeDelete, deleteLater, sendTemporaryMessage } = require("../utils/messageUtils");
const { logCommandUsage } = require("../services/logService");

module.exports = {
    name: "detailedadminhelp",
    description: "An advanced help command that breaks down what each admin command does",

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
            "Here is a detailed list of admin commands -\n\n" +
            `\`\`\`${prefix}adminhelp\`\`\` - Shows you all possible admin commands\n\n` +
            `\`\`\`${prefix}detailedadminhelp\`\`\` - Shows advanced info on admin commands\n\n` +
            `\`\`\`${prefix}kick\`\`\` - Kicks a mentioned user\n\n` +
            `\`\`\`${prefix}ban\`\`\` - Bans a mentioned user\n\n` +
            `\`\`\`${prefix}purge #\`\`\` - Purges a specified number of messages\n\n` +
            `\`\`\`${prefix}new_gameassignment\`\`\` - Posts a new game assignment message\n\n` +
            `\`\`\`${prefix}new_helpme\`\`\` - Post a new help me message\n\n` +
            `\`\`\`${prefix}new_veil\`\`\` - Posts a new veil message\n\n` +
            `\`\`\`${prefix}new_welcome\`\`\` - Post a new welcome message`
        );

        deleteLater(reply, timers.detailedHelpDelete);

        await logCommandUsage(msg, `${prefix}detailedadminhelp`);
    }
};