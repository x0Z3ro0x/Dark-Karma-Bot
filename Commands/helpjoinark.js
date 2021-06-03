const discord = require("discord.js");
const client = new discord.Client();
const cmdPrefix = "*";

module.exports = {
    name: "helpjoinark",
    description: "A command to help user join the ark server",
    execute(msg, args) {
        msg.channel.send("Here is a list of our server IPs. You may copy and paste them directly into steam server favorites to save and join our server.\n\nThe Island - ```98.225.68.170:27102```\nScorched Earth - ```98.225.68.170:27106```\nAberration - ```98.225.68.170:27112```\nExtinction - ```98.225.68.170:27116```\nValguero - ```98.225.68.170:27120```\nGenesis Part 1 - ```98.225.68.170:27124```" +
            "\nOnce the IP you want is copied, head to steam. Navigate to View ---> Servers ---> Favorites ---> Add a Server | and just paste in the IP you copied. Now select Find Games at this Address and once found, add it to your favorites. This will let our servers appear in your favorites tab in game. Make sure to remove any old entries so you don\"t clutter your favorites tab.");
        msg.client.channels.cache.get("615509476317069315").send(msg.author.username + " just used command - ```" + cmdPrefix + "helpjoinark```");
    }
};