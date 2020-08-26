const discord = require("discord.js");
const client = new discord.Client();
const cmdPrefix = "*";

module.exports = {
    name: "beat",
    description: "A joke command for picking on the bot",
    execute(msg, args) {
        msg.channel.send("Ouch! Someone help me I need an adult!! <@" + msg.author.id + "> is beating me!");
        msg.client.channels.cache.get("615509476317069315").send(msg.author.username + " just used command - ```" + cmdPrefix + "beat```");
    }
};