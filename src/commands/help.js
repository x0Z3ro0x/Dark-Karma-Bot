const { prefix, timers } = require("../config/server.config");
const { safeDelete, deleteLater } = require("../utils/messageUtils");
const { logCommandUsage } = require("../services/logService");

module.exports = {
    name: "help",
    description: "A simple help command to show all commands",

    async execute(msg, args) {
        await safeDelete(msg);

        const reply = await msg.channel.send(
            "Currently, there are 12 possible user commands - \n" +
            "```\n" +
            `${prefix}help\n` +
            `${prefix}detailedhelp\n` +
            `${prefix}invite\n` +
            `${prefix}online\n` +
            `${prefix}greet\n` +
            `${prefix}math\n` +
            `${prefix}beat\n` +
            `${prefix}ark\n` +
            `${prefix}helpjoinark\n` +
            `${prefix}mc\n` +
            `${prefix}helpjoinmc\n` +
            `${prefix}adminhelp` +
            "```"
        );

        deleteLater(reply, timers.helpMessageDelete);

        await logCommandUsage(msg, `${prefix}help`);
    }
};