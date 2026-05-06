const { prefix, timers } = require("../config/server.config");
const { safeDelete, deleteLater } = require("../utils/messageUtils");
const { logCommandUsage } = require("../services/logService");

module.exports = {
    name: "detailedhelp",
    description: "A detailed breakdown of all user commands",

    async execute(msg, args) {
        await safeDelete(msg);

        const reply = await msg.channel.send(
            "Here is a detailed list of user commands -\n\n" +
            `\`\`\`${prefix}help\`\`\` - Shows all user commands\n\n` +
            `\`\`\`${prefix}detailedhelp\`\`\` - Shows advanced command info\n\n` +
            `\`\`\`${prefix}invite\`\`\` - Get server invite link\n\n` +
            `\`\`\`${prefix}online\`\`\` - Shows server status\n\n` +
            `\`\`\`${prefix}greet\`\`\` - Sends greeting message\n\n` +
            `\`\`\`${prefix}math\`\`\` - Perform math operations\n\n` +
            `\`\`\`${prefix}beat\`\`\` - Beat up the bot (rude)\n\n` +
            `\`\`\`${prefix}ark\`\`\` - Shows ARK server info\n\n` +
            `\`\`\`${prefix}helpjoinark\`\`\` - Help joining ARK\n\n` +
            `\`\`\`${prefix}mc\`\`\` - Shows Minecraft info\n\n` +
            `\`\`\`${prefix}helpjoinmc\`\`\` - Help joining Minecraft`
        );

        deleteLater(reply, timers.detailedHelpDelete);

        await logCommandUsage(msg, `${prefix}detailedhelp`);
    }
};