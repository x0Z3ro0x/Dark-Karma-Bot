const { removeReactionRole } = require("../services/reactionRoleService");

module.exports = (client) => {
    client.on("messageReactionRemove", async (reaction, user) => {
        await removeReactionRole(reaction, user);
    });
};