const discord = require("discord.js");
const client = new discord.Client();
const cmdPrefix = "*";

module.exports = {
    name: "kick",
    description: "An admin command to kick users.",
    execute(msg, args) {
        const member = msg.member;
        
        if (member.roles.cache.has("615380530480939027") || member.roles.cache.has("615507860389888020") || member.roles.cache.has("615507508668137493") || member.roles.cache.has("615508127948996608") || member.roles.cache.has("615508552165097524") || member.roles.cache.has("664208918133735450")) {
            var mentionMember = msg.mentions.members.first();
            var fighter1 = msg.member.roles.highest;

            if (!mentionMember) {
                msg.delete();
                msg.channel.send("You need to give me a user to kick!").then(msg => {
                    msg.delete({ timeout:12000 })});
                return;
            }

            var userID = mentionMember.user.id;
            var userName = mentionMember.user.username;
            var fighter2 = mentionMember.roles.highest;

            if (fighter2.rawPosition >= fighter1.rawPosition) {
                msg.delete();
                msg.channel.send(userName + " is above you. You may only kick users beneath your user group.").then(msg => {
                    msg.delete({ timeout:12000 })});
            }
            else if (!mentionMember.kickable) {
                msg.delete();
                msg.channel.send("Woah! That user is far to strong for me to kick!").then(msg => {
                    msg.delete({ timeout:12000 })});
            }
            else {
                msg.delete();
                msg.channel.send("<@" + userID + "> has been steam rolled out of the Discord server. Bye Felicia.").then(msg => {
                    msg.delete({ timeout:12000 })});
                mentionMember.kick();
            }
        }
        else {
            msg.delete();
            msg.channel.send("Sorry Zero beat me until I learned not to let your user group access this command. I won't make that mistake again so come back when you are an OG or Admin.").then(msg => {
                msg.delete({ timeout:12000 })});
        }
    }
};