const discord = require("discord.js");
const client = new discord.Client();
const cmdPrefix = "*";

module.exports = {
    name: "invite",
    description: "A command to post the server invite link",
    execute(msg, args) {
        msg.channel.send("https://discord.gg/vZ7KMAe");
        msg.client.channels.cache.get("615509476317069315").send(msg.author.username + " just used command - ```" + cmdPrefix + "invite```");
    }
};