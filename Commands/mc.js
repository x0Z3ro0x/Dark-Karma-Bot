const discord = require("discord.js");
const client = new discord.Client();
const cmdPrefix = "*";

module.exports = {
    name: "mc",
    description: "A command to post information about the minecraft server",
    execute(msg, args) {
        msg.channel.send("We host a public Minecraft server with 64 slots and over 35 game modes. You can join anytime by using the link in <#663415309671333898>");
        msg.client.channels.cache.get("615509476317069315").send(msg.author.username + " just used command - ```" + cmdPrefix + "mc```");
    }
};