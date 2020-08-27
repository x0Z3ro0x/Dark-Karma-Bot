// Declare required modules
const discord = require("discord.js");
const math = require("mathjs");
const fs = require("fs");

// Declare variables
const cmdPrefix = "*";

// Initialize discord client and assign it to client variable | In addition we retrieve and require our authentication token
const client = new discord.Client({ partials: ["MESSAGE", "REACTION"]});

// Initialize and declare our command files
client.commands = new discord.Collection();
const commandFiles = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(`./Commands/${file}`);
    client.commands.set(command.name, command);
}

// declare our token and login the bot using the token
const {
    token
} = require("./auth.json");
client.login(token);

// Event array
const eventArray = [
    "ready",
    "reconnecting",
    "message",
    "messageReactionAdd",
    "messageReactionRemove"
];

// Print off to console to let us know the bot is online, and to show us if the bot is trying to reconnect due to any kind of issue. Most likely internet or server outage
client.on(eventArray[0], () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on(eventArray[1], () => {
    console.log(`${client.user.tag} is trying to reconnect!`);
});

// Begin listening to messages
client.on(eventArray[2], async msg => {
    // listen for commands in our command files
    /* ---------- FAIL SAFE LINE ----------
    if (!msg.content.startsWith(cmdPrefix) || msg.author.bot) return;
    const args = msg.content.slice(cmdPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (!client.commands.has(command)) return;
    
    try {
        client.commands.get(command).execute(msg, args);
    } catch (error) {
        console.error(error);
        msg.channel.send("<@194132431551463424>, There was an issue executing this command! Please figure it out when you can!");
    }
    //*/
    //end of command listening

    ///* ---------- TESTING WORKSPACE LINE ----------
    const msgContent = msg.content.toLowerCase();
    
    if (msgContent === "*test") {
        var msgArgs = msg.content.split(" ");
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
    //*/
});

client.on(eventArray[3], async(reaction, user) => {
    const { guild } = reaction.message;
    if (reaction.message.channel.id === "623254601008939009" && reaction._emoji.name === "dkg") {
        if (user.id === "697135587332980736") {

        }
        else {
            const role = guild.roles.cache.find((role) => role.id === "615383423665700864");
            const member = guild.members.cache.find((member) => member.id === user.id);
            member.roles.add(role);
        }
    }
    else if (reaction.message.channel.id === "615402768211116035" && reaction._emoji.name === "mc") {
        if (user.id === "697135587332980736") {

        }
        else {
            const role = guild.roles.cache.find((role) => role.id === "615512133999788042");
            const member = guild.members.cache.find((member) => member.id === user.id);
            member.roles.add(role);
        }
    }
    else if (reaction.message.channel.id === "615402768211116035" && reaction._emoji.name === "ark") {
        if (user.id === "697135587332980736") {

        }
        else {
            const role = guild.roles.cache.find((role) => role.id === "615512297170796554");
            const member = guild.members.cache.find((member) => member.id === user.id);
            member.roles.add(role);
        }
    }
    else if (reaction.message.channel.id === "615402768211116035" && reaction._emoji.name === "gamertag") {
        if (user.id === "697135587332980736") {

        }
        else {
            const role = guild.roles.cache.find((role) => role.id === "651982607776743426");
            const member = guild.members.cache.find((member) => member.id === user.id);
            member.roles.add(role);
        }
    }
    else if (reaction.message.channel.id === "615402768211116035" && reaction._emoji.name === "twitch") {
        if (user.id === "697135587332980736") {

        }
        else {
            const role = guild.roles.cache.find((role) => role.id === "652279770129629219");
            const member = guild.members.cache.find((member) => member.id === user.id);
            member.roles.add(role);
        }
    }
    else if (reaction.message.channel.id === "615519151431090189" && reaction._emoji.name === "customtools") {
        if (user.id === "697135587332980736") {

        }
        else {
            const role = guild.roles.cache.find((role) => role.id === "615521211371225109");
            const member = guild.members.cache.find((member) => member.id === user.id);
            member.roles.add(role);
        }
    }
    else if (reaction.message.channel.id === "652708891485929492" && reaction._emoji.name === "lips1") {
        if (user.id === "697135587332980736") {

        }
        else {
            const role = guild.roles.cache.find((role) => role.id === "615801839706832908");
            const member = guild.members.cache.find((member) => member.id === user.id);
            member.roles.add(role);
        }
    }
});

client.on(eventArray[4], async (reaction, user) => {
    const { guild } = reaction.message;

    if (reaction.message.channel.id === "623254601008939009" && reaction._emoji.name === "dkg") {
        const role = guild.roles.cache.find((role) => role.id === "615383423665700864");
        const member = guild.members.cache.find((member) => member.id === user.id);
        member.roles.remove(role);
    }
    else if (reaction.message.channel.id === "615402768211116035" && reaction._emoji.name === "mc") {
        const role = guild.roles.cache.find((role) => role.id === "615512133999788042");
        const member = guild.members.cache.find((member) => member.id === user.id);
        member.roles.remove(role);
    }
    else if (reaction.message.channel.id === "615402768211116035" && reaction._emoji.name === "ark") {
        const role = guild.roles.cache.find((role) => role.id === "615512297170796554");
        const member = guild.members.cache.find((member) => member.id === user.id);
        member.roles.remove(role);
    }
    else if (reaction.message.channel.id === "615402768211116035" && reaction._emoji.name === "gamertag") {
        const role = guild.roles.cache.find((role) => role.id === "651982607776743426");
        const member = guild.members.cache.find((member) => member.id === user.id);
        member.roles.remove(role);
    }
    else if (reaction.message.channel.id === "615402768211116035" && reaction._emoji.name === "twitch") {
        const role = guild.roles.cache.find((role) => role.id === "652279770129629219");
        const member = guild.members.cache.find((member) => member.id === user.id);
        member.roles.remove(role);
    }
    else if (reaction.message.channel.id === "615519151431090189" && reaction._emoji.name === "customtools") {
        const role = guild.roles.cache.find((role) => role.id === "615521211371225109");
        const member = guild.members.cache.find((member) => member.id === user.id);
        member.roles.remove(role);
    }
    else if (reaction.message.channel.id === "652708891485929492" && reaction._emoji.name === "lips1") {
        const role = guild.roles.cache.find((role) => role.id === "615801839706832908");
        const member = guild.members.cache.find((member) => member.id === user.id);
        member.roles.remove(role);
    }
});
