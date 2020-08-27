const discord = require("discord.js");
const client = new discord.Client();
const cmdPrefix = "*";

module.exports = {
    name: "new_helpme",
    description: "Admin command for placing a new Help Me message.",
    execute(msg, args) {
        const member = msg.member;

        if (member.roles.cache.has("615380530480939027")) {
            const reactEmoji1 = msg.guild.emojis.cache.find(e => e.name === "customtools");
            msg.client.channels.cache.get("615519151431090189").send(
                "Are you stuck? Need advice? Need a tag? Perhaps someone is breaking the rules? React with the <:customtools:748540738987622400> icon below and " +
                "the support category will be shown to you, but **don't forget to click the icon AGAIN once you are done with support** " +
                "to hide the support category. Otherwise things can start to get messy with a lot of channels visible."
            ).then(sentEmbed => {
                sentEmbed.react(reactEmoji1)
            });
        }
        else {
            msg.channel.send("Sorry Zero beat me until I learned not to let your user group access this command. I won't make that mistake again so come back when you are an OG or Admin.")
        }
    }
};