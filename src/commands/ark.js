const { prefix, channels } = require("../config/server.config");
const { logCommandUsage } = require("../services/logService");

module.exports = {
    name: "ark",
    description: "A command to post information about the ARK server",

    async execute(msg, args) {
        await msg.channel.send(
            `The Ark server was shutdown so we could focus on making our own games. All server files are backed up and available for download. Just reach out to Zero.`
        );

        await logCommandUsage(msg, `${prefix}ark`);
    }
};