const discord = require("discord.js");
const client = new discord.Client();
const cmdPrefix = "*";

module.exports = {
    name: "help",
    description: "A simple help command to show all commands",
    execute(msg, args) {
        msg.channel.send("Currently there is 13 possible commands, \n```\n*greet\n*help\n*detailedhelp\n*beat\n*invite\n*ark\n*helpjoinark\n*mc\n*helpjoinmc\n*online\n*purge (admin only)\n*math\n*event```");
        msg.client.channels.cache.get("615509476317069315").send(msg.author.username + " just used command - ```" + cmdPrefix + "help```");
    }
};