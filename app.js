// Declare required modules
const discord = require("discord.js");
const math = require("mathjs");
const fs = require("fs");
const ping = require("minecraft-server-util");

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

// no no word array
const nonoWordArray = [
    "fuc",
    "bitch",
    "faggot",
    "cunt",
    "shit",
    "bastard",
    "whore",
    "shit",
    "nigg",
    "spic",
    "beaner",
    "slut",
    "inbred",
    "retard",
    "twat",
    "spastic",
    "tosser",
    "spaz",
    "slag"
];

// Don't moderate these channels
const ignoredChannels = [
    "735577954523807866",
    "615510613925429259",
    "615802995208224768",
    "694654901803941927"
];

const ignoredChannels2 = [
    "735577954523807866",
    "615510613925429259",
    "615802995208224768"
];

// Link triggers
const triggers = [
        "www",
        "http",
        ".com"
    ];

// Allowed links
const dkgInvite = "https://discord.gg/vZ7KMAe";
const allowedLinks = [
    "tenor.com",
    "github.com",
    "youtube.com"
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
    ///* ---------- FAIL SAFE LINE ----------
    // Chat Moderation
    const msgContent = msg.content.toLowerCase();

    // Naughty words check
    for (var i = 0; i < nonoWordArray.length; i++) {
        if (msgContent.includes(nonoWordArray[i]) && !ignoredChannels.includes(msg.channel.id) && msg.author.bot === false) {
            msg.delete();
            msg.channel.send("Please stop cussing, <@" + msg.author.id + ">!").then(msg => {
                msg.delete({ timeout:12000 })});
            break;
        }
    };
    
    // Naughty links check
    for (var i = 0; i < triggers.length; i++) {
        if (msgContent.includes(triggers[i]) && !ignoredChannels2.includes(msg.channel.id) && msg.content !== dkgInvite && msg.author.bot === false) {
            if(msg.content.includes('\n')) {
                msg.delete();
                msg.channel.send("I detected a break in your link. Fix this and try to post your link again.").then(msg => {
                msg.delete({ timeout:12000 })});
                break;
            }
            else if (msg.content.includes(' ')) {
                msg.delete();
                msg.channel.send("I detected spacing in your link. Fix this and try to post your link again.").then(msg => {
                msg.delete({ timeout:12000 })});
                break;
            }
            else if (msgContent.includes("https://tenor.com") || msgContent.includes("https://github.com") || msgContent.includes("https://open.spotify.com") || msgContent.includes("https://www.youtube.com")) {
                break;
            }
            else {
                msg.delete();
                msg.channel.send("<@" + msg.author.id + ">, I have detected an illegal link. Removing now...\n\nContinuing to post these links will result in a ban.").then(msg => {
                msg.delete({ timeout:12000 })});
                break;
            }
        }
    };
    // end of Chat Moderation
    
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
    // end of command listening
    //*/

    /* ---------- TESTING WORKSPACE LINE ----------
    const msgContent = msg.content.toLowerCase();

    if (msgContent.startsWith("*test")) {
        var msgArgs = msg.content.split(" ");
        const member = msg.member;
        
        if (member.roles.cache.has("615380530480939027")) {
            msg.channel.send("Test bot is online. Are you ready to do some work sir?");
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
    else if (reaction.message.channel.id === "615402768211116035" && reaction._emoji.name === "cs") {
        if (user.id === "697135587332980736") {

        }
        else {
            const role = guild.roles.cache.find((role) => role.id === "763819991837179924");
            const memeber = guild.members.cache.find((member) => member.id === user.id);
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
    else if (reaction.message.channel.id === "615402768211116035" && reaction._emoji.name === "cs") {
        const role = guild.roles.cache.find((role) => role.id === "763819991837179924");
        const memeber = guild.members.cache.find((member) => member.id === user.id);
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
