const discord = require("discord.js");
const client = new discord.Client();
const cmdPrefix = "*";

module.exports = {
    name: "detailedhelp",
    description: "A advanced help command that breaks down what each user command does",
    execute(msg, args) {
        msg.delete();
        msg.channel.send("Here is a detailed list of user commands -\n\n```*help``` - Lists all supported user commands\n\n```*detailedhelp``` - Shows advanced info on commands" +
            "\n\n```*invite``` - Shows the Discord Invite Link\n\n```*online``` - Checks to see if the Bot is online\n\n```*greet``` - Sends a friendly greeting to Karma Bot." +
            "\n\n```*math``` - Let's you calculate any 2 numbers.\n Valid Format: ```InputNumber [Input  Math Operator such as +, -, *, /, ^] InputNumber```" +
            "\n```*beat``` - Hit Karma bot. Are you heartless?\n\n```*ark``` - Displays basic Ark info\n\n```*helpjoinark``` - Teaches you how to join our Ark Server" +
            "\n\n```*mc``` - Displays basic Minecraft info\n\n```*helpjoinmc``` - Teaches you how to join our Minecraft Server\n\n```*adminhelp``` - Lists all supported admin commands").then(msg => {
                msg.delete({ timeout: 30000 })
            });
        msg.client.channels.cache.get("615509476317069315").send(msg.author.username + " just used command - ```" + cmdPrefix + "detailedhelp```");
    }
};