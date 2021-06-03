const discord = require("discord.js");
const client = new discord.Client();
const cmdPrefix = "*";

module.exports = {
    name: "ark",
    description: "A command to post information about the ark server",
    execute(msg, args) {
        msg.channel.send("We host all 6 story maps on a cluster. You can join anytime by using the links in <#663801407513821185>.");
        msg.client.channels.cache.get("615509476317069315").send(msg.author.username + " just used command - ```" + cmdPrefix + "ark```");
    }
};