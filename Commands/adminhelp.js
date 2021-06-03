const discord = require("discord.js");
const client = new discord.Client();
const cmdPrefix = "*";

module.exports = {
    name: "adminhelp",
    description: "A simple help command for admins.",
    execute(msg, args) {
        // 615380530480939027 = OG
        // 615508552165097524 = Staff
        // 615507860389888020 = Design Developer
        // 615507508668137493 = Code Developer
        // 761721046172041216 = Manager
        // 664208918133735450 = Support Guru

        const member = msg.member;

        if (member.roles.cache.has("615380530480939027") || member.roles.cache.has("615508552165097524") || member.roles.cache.has("615507860389888020") || member.roles.cache.has("615507508668137493") || member.roles.cache.has("761721046172041216") || member.roles.cache.has("664208918133735450")) {
            msg.delete();
            msg.channel.send("Currently, there are 9 possible admin commands - \n```\n*adminhelp\n*detailedadminhelp\n*kick\n*ban\n*purge\n*new_gameassignment\n*new_helpme\n*new_veil\n*new_welcome```").then(msg => {
                msg.delete({ timeout: 21000 })
            });
            msg.client.channels.cache.get("615509476317069315").send(msg.author.username + " just used command - ```" + cmdPrefix + "adminhelp```");

        }
        else {
            msg.delete();
            msg.channel.send("Sorry Zero beat me until I learned not to let your user group access this command. I won't make that mistake again so come back when you are an OG or Admin.").then(msg => {
                msg.delete({ timeout: 12000 })
            });
        }
    }
};