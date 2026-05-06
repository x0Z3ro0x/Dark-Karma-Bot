const { prefix, channels } = require("../config/server.config");
const { logCommandUsage } = require("../services/logService");

module.exports = {
    name: "helpjoinark",
    description: "Help joining ARK servers",

    async execute(msg, args) {
        await msg.channel.send(
            `To join our ARK servers, head over to <#${channels.arkInfo}> and follow the instructions.`
        );

        await logCommandUsage(msg, `${prefix}helpjoinark`);
    }
};