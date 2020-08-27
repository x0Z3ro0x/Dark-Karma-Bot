const discord = require("discord.js");
const client = new discord.Client();
const cmdPrefix = "*";

module.exports = {
    name: "new_veil",
    description: "Admin command for placing a new Veil message.",
    execute(msg, args) {
        const member = msg.member;

        if (member.roles.cache.has("615380530480939027")) {
            const reactEmoji1 = msg.guild.emojis.cache.find(e => e.name === "lips1");
            msg.client.channels.cache.get("652708891485929492").send(
                "Are you looking to escape the family areas? No worries, we've got you covered, and we get it. Yes we are family based, " +
                "but that doesn't mean we don't have an area for everyone..or know what it's like to need to get away from the children.\n\n" +
                "First and foremost let's get some things straight. I am not responsible for what you see in unfiltered rooms. Cussing " +
                "is allowed with moderation. Normal social rules still apply. Many think 18 + means porn, no rules, and general Chaos. That may " +
                "be the case elsewhere in the world, it's not the case here.\n\nEntering an adult area means we expect you to act like an " +
                "adult. Children found in these areas will be instantly banned, without warning, from all non - family areas. What is " +
                "a child? If you cannot differentiate between a mature adult, and a child, well then you have your answer and you should move on.\n\n" +
                "Now, this may be a 18 + area, but pornographic content is not allowed, take that sh** somewhere else. 18 + " +
                "channels and areas simply means all the PG constraints of family areas are gone. Kids are in bed, and it's time " +
                "for the adults to relax ;)\n\nIf you understand AND accept that as well as acknowledge the mental age requirements, " +
                "then proceed by clicking the <:lips1:652712561959239690> reaction below."
            ).then(sentEmbed => {
                sentEmbed.react(reactEmoji1)
            });
        }
        else {
            msg.channel.send("Sorry Zero beat me until I learned not to let your user group access this command. I won't make that mistake again so come back when you are an OG or Admin.")
        }
    }
};