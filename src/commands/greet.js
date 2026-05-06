const { prefix } = require("../config/server.config");
const { logCommandUsage } = require("../services/logService");

module.exports = {
    name: "greet",
    description: "Greets the user",

    async execute(msg, args) {
        await msg.channel.send(
            `Hello <@${msg.author.id}>! Welcome to Dark Karma.`
        );

        await logCommandUsage(msg, `${prefix}greet`);
    }
};