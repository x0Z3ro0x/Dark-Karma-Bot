const discord = require("discord.js");
const client = new discord.Client();
const cmdPrefix = "*";

module.exports = {
    name: "online",
    description: "A joke command to check if the bot is online",
    execute(msg, args) {
        msg.channel.send("Did you really just ask me that <@" + msg.author.id + ">? Yes I am online and working as intended, who do you think I am, Nugget Bot? :rolling_eyes:", { files: ["https://i.ibb.co/1Xsmg85/Capture.png"] });
        msg.client.channels.cache.get("615509476317069315").send(msg.author.username + " just tried using command - ```" + cmdPrefix + "online```");
    }
};