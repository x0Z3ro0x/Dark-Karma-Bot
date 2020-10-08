const discord = require("discord.js");
const client = new discord.Client();
const cmdPrefix = "*";

module.exports = {
    name: "new_gameassignment",
    description: "Admin command for placing a new game assignment message.",
    execute(msg, args) {
        const member = msg.member;

        if (member.roles.cache.has("615380530480939027")) {
            const reactEmoji1 = msg.guild.emojis.cache.find(e => e.name === "mc");
            const reactEmoji2 = msg.guild.emojis.cache.find(e => e.name === "ark");
            const reactEmoji3 = msg.guild.emojis.cache.find(e => e.name === "gamertag");
            const reactEmoji4 = msg.guild.emojis.cache.find(e => e.name === "twitch");
            const reactEmoji5 = msg.guild.emojis.cache.find(e => e.name === "cs");
            msg.client.channels.cache.get("615402768211116035").send(
                "See fast and harmless! Alright let's continue. In addition to this awesome channel, you should " +
                "be seeing some some general channels for making friends and just chatting. Please remember, " +
                "if you ever need help for any reason, or to report someone, etc, do so within the support category " +
                "by following the <#615519151431090189> channel. **NEVER** hesitate to use it day or night and someone will " +
                "answer you as soon as they can.\n\nMoving on, this is where the magic happens when it comes to our " +
                "servers! Take a look at the 'reaction' icons below this post. You might recognize some, others " +
                "you might not. That's ok though as we will explain everything. The easiest recognized of the icons is " +
                "probably the Minecraft icon. Simply enough, these icons assign you roles, just like the rules " +
                "assigned you the member role, these icons will assign you to different games.\n\nWhat this does is " +
                "allow us to keep the discord neat and clean while delivering the most efficient way to our " +
                "services. So for instance, if you are here just to make friends and chill, you are already good " +
                "to go. All you will need is your member role to begin talking in the <#615500059127316490> channel. However if " +
                "you wanted access to say, the Minecraft channels, or other games we offer, then you would " +
                "want to react by clicking that games icon below.\n\nSo Minecraft players would click the <:mc:651955585440415775> icon. " +
                "Ark players would click the <:ark:615448597894529037> icon so on and so forth. If at anytime you need help " +
                "understanding the icons and their respective games, please just head to the <#615519151431090189> channel.\n\n" +
                "In addition don't forget to check out our webstore - \n\n(https://www.dkgaming.us/)\n\nwhile you're at it. " +
                "It's still a work in progress but we have a ton of stuff planned so keep checking back. Well what are you waiting for? " +
                " Get active and get gaming!\n\nBest of wishes,\nDKG"
            ).then(sentEmbed => {
                sentEmbed.react(reactEmoji1)
                sentEmbed.react(reactEmoji2)
                sentEmbed.react(reactEmoji5)
                sentEmbed.react(reactEmoji3)
                sentEmbed.react(reactEmoji4)
            });
        }
        else {
            msg.channel.send("Sorry Zero beat me until I learned not to let your user group access this command. I won't make that mistake again so come back when you are an OG or Admin.")
        }
    }
};