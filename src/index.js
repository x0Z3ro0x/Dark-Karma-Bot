const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");
const { token } = require("../auth.json");

const { loadCommands } = require("./services/commandService");

const ready = require("./events/ready");
const messageCreate = require("./events/messageCreate");
const messageReactionAdd = require("./events/messageReactionAdd");
const messageReactionRemove = require("./events/messageReactionRemove");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions
    ],
    partials: [
        Partials.Message,
        Partials.Channel,
        Partials.Reaction
    ]
});

client.commands = new Collection();

loadCommands(client);

ready(client);
messageCreate(client);
messageReactionAdd(client);
messageReactionRemove(client);

client.login(token);