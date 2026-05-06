const { prefix, timers } = require("../config/server.config");
const { sendTemporaryMessage, safeDelete } = require("../utils/messageUtils");
const { logCommandUsage } = require("../services/logService");

module.exports = {
    name: "online",
    description: "A joke command to check if the bot is online",

    async execute(msg, args) {
        await safeDelete(msg);

        await sendTemporaryMessage(
            msg.channel,
            `Did you really just ask me that <@${msg.author.id}>? Yes I am online and working as intended, who do you think I am, Nugget Bot? 🙄`,
            timers.normalMessageDelete
        );

        await logCommandUsage(msg, `${prefix}online`);
    }
};