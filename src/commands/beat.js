const { prefix } = require("../config/server.config");
const { logCommandUsage } = require("../services/logService");

module.exports = {
    name: "beat",
    description: "A joke command for picking on the bot",

    async execute(msg, args) {
        await msg.channel.send(
            `Ouch! Someone help me I need an adult!! <@${msg.author.id}> is beating me!`
        );

        await logCommandUsage(msg, `${prefix}beat`);
    }
};