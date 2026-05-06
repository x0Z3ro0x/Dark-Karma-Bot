const { prefix, channels } = require("../config/server.config");
const { logCommandUsage } = require("../services/logService");

module.exports = {
    name: "mc",
    description: "A command to post information about the Minecraft server",

    async execute(msg, args) {
        await msg.channel.send(
            `We have closed our MC server in favor of hosting and developing our games. Apologies for the inconvience.`
        );

        await logCommandUsage(msg, `${prefix}mc`);
    }
};