const { addReactionRole } = require("../services/reactionRoleService");

module.exports = (client) => {
    client.on("messageReactionAdd", async (reaction, user) => {
        await addReactionRole(reaction, user);
    });
};