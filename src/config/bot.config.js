const { guilds, users } = require("./ids.config");

module.exports = {
    commandPrefix: "*",

    guildId: guilds.main,

    botUserIds: [
        users.botPrimary,
        users.botSecondary
    ]
};