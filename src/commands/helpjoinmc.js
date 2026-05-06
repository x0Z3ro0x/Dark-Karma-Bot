const { prefix, channels } = require("../config/server.config");
const { logCommandUsage } = require("../services/logService");

module.exports = {
    name: "helpjoinmc",
    description: "Help joining Minecraft servers",

    async execute(msg, args) {
        await safeDelete(msg);
        
        await msg.channel.send(
            `To join our Minecraft servers, head over to <#${channels.minecraftInfo}> and follow the instructions.`
        );

        deleteLater(reply, 21000);

        await logCommandUsage(msg, `${prefix}helpjoinmc`);
    }
};