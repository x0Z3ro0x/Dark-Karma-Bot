module.exports = (client) => {
    client.once("clientReady", () => {
        console.log(`Logged in as ${client.user.tag}!`);
    });

    client.on("shardReconnecting", () => {
        console.log(`${client.user.tag} is trying to reconnect!`);
    });
};