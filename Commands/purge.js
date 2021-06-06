const discord = require("discord.js");
const client = new discord.Client();
const cmdPrefix = "*";

module.exports = {
    name: "purge",
    description: "An admin command to purge messages",
    execute(msg, args) {
        const member = msg.member;
        if (member.roles.cache.has('615508127948996608') || member.roles.cache.has('615380530480939027')) {
            async function clear() {
                const msgFetch = await msg.channel.messages.fetch({ limit: 10 });
                msg.channel.bulkDelete(msgFetch);
            }
            clear();
        }
        else {
            msg.channel.send("Sorry Zero beat me until I learned not to let your user group access this command. I won't make that mistake again so come back when you are an OG or Admin.");
            msg.client.channels.cache.get("615509476317069315").send(msg.author.username + " just tried using command - ```" + cmdPrefix + "purge```");
        }
    }
};