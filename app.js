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
            ping.status('play.hypixel.net')
                .then((result) => {
                    msg.channel.send("Take a look\n" + result)
                    msg.channel.send("Hey look at that everything worked. Congratz, you just bridged the gap between your MC server and discord...");
                })
                .catch((error) => {
                    msg.channel.send("Something went wrong. Most likely a timeout. Check the console for errors Zero.")
                    throw error;
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
