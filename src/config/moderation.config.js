const serverConfig = require("./server.config");

module.exports = {
    blockedWords: serverConfig.moderation.blockedWords,

    ignoredWordChannels: serverConfig.moderation.ignoredWordChannels,

    ignoredLinkChannels: serverConfig.moderation.ignoredLinkChannels,

    linkTriggers: serverConfig.moderation.linkTriggers,

    allowedLinks: serverConfig.moderation.allowedLinks,

    allowedLinkRoleIds: serverConfig.permissions.linkBypassRoles,

    moderationLogChannelId: serverConfig.channels.moderationLog
};