const discord = require("discord.js");
const client = new discord.Client();
const cmdPrefix = "*";

module.exports = {
    name: "detailedadminhelp",
    description: "A advanced help command that breaks down what each admin command does",
    execute(msg, args) {
        if (member.roles.cache.has("615380530480939027") || member.roles.cache.has("615507860389888020") || member.roles.cache.has("615507508668137493") || member.roles.cache.has("615508127948996608") || member.roles.cache.has("615508552165097524") || member.roles.cache.has("664208918133735450")) {
            msg.delete();
            msg.channel.send("Here is a detailed list of admin commands -\n\n```*adminhelp``` - Shows you all possible admin commands\n\n```*detailedadminhelp``` - Shows advanced info on admin commands" +
                "\n\n```*kick``` - Kicks a mentioned user\n\n```*ban``` - Bans a mentioned user\n\n```*purge #``` - Purges a specified number of messages\n\n```*new_gameassignment``` - Posts a new " +
                "game assignment message\n\n```*new_helpme``` - Post a new help me message\n\n```*new_veil``` - Posts a new veil message\n\n```*new_welcome``` - Post a new welcome message").then(msg => {
                    msg.delete({ timeout: 30000 })
                });
            msg.client.channels.cache.get("615509476317069315").send(msg.author.username + " just used command - ```" + cmdPrefix + "detailedadminhelp```");
        }
        else {
            msg.delete();
            msg.channel.send("Sorry Zero beat me until I learned not to let your user group access this command. I won't make that mistake again so come back when you are an OG or Admin.").then(msg => {
                msg.delete({ timeout: 12000 })
            });
        }
    }
};