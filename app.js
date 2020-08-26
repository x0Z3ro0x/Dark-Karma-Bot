// Declare required modules
const discord = require("discord.js");
const math = require("mathjs");
const fs = require("fs");

// Declare variables
const cmdPrefix = "*";

// Initialize discord client and assign it to client variable | In addition we retrieve and require our authentication token
const client = new discord.Client();

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
    "message"
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
    if (!msg.content.startsWith(cmdPrefix) || msg.author.bot) return;

    const args = msg.content.slice(cmdPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;
    try {
        client.commands.get(command).execute(msg, args);
    } catch (error) {
        console.error(error);
        msg.reply("There was an issue executing that command!");
    }
    //end of command listening

    // Testing workspace
    if (msg.content.startsWith(cmdPrefix) + msg.content.includes("test")) {
        var msgArgs = msg.content.split(" ");

    }
});