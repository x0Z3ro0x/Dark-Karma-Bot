const discord = require("discord.js");
const client = new discord.Client();
const cmdPrefix = "*";

module.exports = {
    name: "helpjoinmc",
    description: "A command to help user join the minecraft server",
    execute(msg, args) {
        msg.channel.send("For detailed help on joining our Minecraft server, head on over to this link -\n\nhttps://github.com/x0Z3ro0x/DKG-MC-Server/wiki/Joining-the-Server");
        msg.client.channels.cache.get("615509476317069315").send(msg.author.username + " just used command - ```" + cmdPrefix + "helpjoinmc```");
    }
};