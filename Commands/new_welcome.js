const discord = require("discord.js");
const client = new discord.Client();
const cmdPrefix = "*";

module.exports = {
    name: "new_welcome",
    description: "Admin command for placing a new welcome message.",
    execute(msg, args) {
        const member = msg.member;

        if (member.roles.cache.has("615380530480939027")) {
            const reactEmoji1 = msg.guild.emojis.cache.find(e => e.name === "dkg");
            msg.client.channels.cache.get("623254601008939009").send("Hello and Welcome to our Discord server! If you need any help at all, don't hesitate to ask, however let's get you assigned first! " +
                "No worries, it's as easy as reading and clicking! *Let's begin*.\n\nPlease keep in mind we host MANY dedicated servers, and as you can imagine " +
                "making all those channels visible, all at once, would be a nightmare. So for each game we host, we have a special role. That role unlocks or " +
                "lets you see that game servers channel. Getting the role is very easy and can be done in the <#615402768211116035>. Head over there to " +
                "take up a role, but before you do, finish up here. Ok moving onto the rules:\n\nWe have a few basic rules for you to check out. If they look good " +
                "to you, make sure to agree to them! To do so, simply click the server icon under this post. It signals you've read our rules, agree to follow " +
                "them, and you understand what we are about.\n" + "\n** Rules -**\n" +
                "> *1.) Stay Classy*\n" +
                "> *2.) Be respectful to everyone, not just staff*\n" +
                "> *3.) No advertising please, YT & Twitch Channel ADs are welcome in self promo*\n" +
                "> *4.) Remember to stay active*\n" +
                "> *5.) Power abuse is **NOT** tolerated.Report anyone breaking this rule to an __OG__*\n" +
                "> *6.) Not everyone here is an adult.There is a lot of family and kids here.Keep it PG unless in adult zones please*\n" +
                "\nI told you, just reading and clicking. Now remember becoming a member is important to unlocking your benefits throughout our servers..You " +
                "will only be able to access the <#623231137988345889> until you reach member status by accepting our rules. Alright, as long as you are " +
                "cool with everything, smash that server icon below and you'll be ported off on your journey.\n\nSee you there!"
            ).then(sentEmbed => {
                sentEmbed.react(reactEmoji1)
            });
        }
        else {
            msg.channel.send("Sorry Zero beat me until I learned not to let your user group access this command. I won't make that mistake again so come back when you are an OG or Admin.")
        }
    }
};