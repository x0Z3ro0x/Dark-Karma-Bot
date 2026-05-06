const fs = require("fs");
const path = require("path");
const { commandPrefix } = require("../config/bot.config");

function loadCommands(client) {
    client.commands = new Map();

    const commandsPath = path.join(__dirname, "../commands");

    const commandFiles = fs.readdirSync(commandsPath)
        .filter(file => file.endsWith(".js"));

    for (const file of commandFiles) {
        const command = require(path.join(commandsPath, file));

        if (!command.name || !command.execute) {
            console.log(`[WARNING] Command ${file} is missing "name" or "execute"`);
            continue;
        }

        client.commands.set(command.name, command);
    }

    console.log(`[COMMANDS] Loaded ${client.commands.size} commands.`);
}

async function runCommand(client, msg) {
    if (!msg.content.startsWith(commandPrefix)) return false;

    const args = msg.content.slice(commandPrefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);
    if (!command) return false;

    try {
        await command.execute(msg, args);
    } catch (err) {
        console.error(`[COMMAND] Error executing ${commandName}:`, err);
        await msg.channel.send("<@194132431551463424>, There was an issue executing this command! Please figure it out when you can!");
    }

    return true;
}

module.exports = {
    loadCommands,
    runCommand
};