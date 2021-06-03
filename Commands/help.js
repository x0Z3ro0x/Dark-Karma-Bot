const discord = require("discord.js");
const client = new discord.Client();
const cmdPrefix = "*";

module.exports = {
    name: "help",
    description: "A simple help command to show all commands",
    execute(msg, args) {
        msg.delete();
        msg.channel.send("Currently, there are 12 possible user commands - \n```\n*help\n*detailedhelp\n*invite\n*online\n*greet\n*math\n*beat\n*ark\n*helpjoinark\n*mc\n*helpjoinmc\n*adminhelp```").then(msg => {
            msg.delete({ timeout: 21000 })
        });
        msg.client.channels.cache.get("615509476317069315").send(msg.author.username + " just used command - ```" + cmdPrefix + "help```");
    }
};