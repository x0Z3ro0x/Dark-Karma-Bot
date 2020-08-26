const discord = require("discord.js");
const client = new discord.Client();
const cmdPrefix = "*";

module.exports = {
    name: "greet",
    description: "A command to greet the bot",
    execute(msg, args) {
        msg.channel.send("Hi, " + "<@" + msg.author.id + ">" + "! It's nice to talk to you! I get pretty lonely sometimes, because Zero keeps me in a box...");
        msg.client.channels.cache.get("615509476317069315").send(msg.author.username + " just used command - ```" + cmdPrefix + "greet```");
    }
};