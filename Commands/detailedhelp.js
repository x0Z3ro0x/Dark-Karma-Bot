const discord = require("discord.js");
const client = new discord.Client();
const cmdPrefix = "*";

module.exports = {
    name: "detailedhelp",
    description: "A advanced help command that breaks down what each command does",
    execute(msg, args) {
        msg.channel.send("Here is a detailed list of commands -\n\n```*greet``` - Replies to you with a greeting\n\n```*help``` - Lists all supported commands\n\n```*detailedhelp``` - Shows advanced info on commands\n\n```*beat``` - Picks on our bot. Are you heartless?\n\n```*invite``` - Shows the Discord Invite Link" +
            "\n\n```*ark``` - Displays basic Ark info\n\n```*helpjoinark``` - Teaches you how to add favorite servers\n\n```*mc``` - Displays basic MC info\n\n```*helpjoinmc``` - Teaches you how to join our Minecraft Server\n\n```*online``` - Checks to see if the Bot is online" +
            "\n\n```*math``` - Let's you calculate any 2 numbers.\n Valid Format - ```InputNumber [Input  Math Operator such as +, -, *, /, ^] InputNumber```\n```*event``` - Shows our next upcoming event for the community");
        msg.client.channels.cache.get("615509476317069315").send(msg.author.username + " just used command - ```" + cmdPrefix + "detailedhelp```");
    }
};