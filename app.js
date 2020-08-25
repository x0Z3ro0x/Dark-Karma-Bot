// Require discord.js package
const discord = require("discord.js");
const math = require("mathjs");

// Initialize discord client and assign it to client variable | In addition we retrieve and require our authentication token
const client = new discord.Client();

const {
    token
} = require("./auth.json");
client.login(token);

// Event array to make the code more readable.
const eventArray = [
    "ready",
    "reconnecting",
    "message"
];


// Command array to store our DKG commands
const cmdArray = [
    "*greet", // 0
    "*help",
    "*bully",
    "*detailedhelp",
    "*invite",
    "*ark", // 5
    "*helpjoinark",
    "*mc",
    "*helpjoinmc",
    "*online",
    "*dkcrate", // 10
    "*purge",
    "*math",
    "*event"
];

// Print off to console to let us know the bot is online, and to show us if the bot is trying to reconnect due to any kind of issue. Most likely internet or server outage
client.on(eventArray[0], () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on(eventArray[1], () => {
    console.log(`${client.user.tag} is trying to reconnect!`);
});

// Begin listening for the commands in our command array
client.on(eventArray[2], async msg => {
    // Message variable needing declared
    const msgContent = msg.content.toLowerCase();
    const eventDate = "2020-08-28 00:00:00";
    const format = "m/d/y H:M";
    var dayInMs = 86400000;
    var hourInMs = 3600000;
    var minuteInMS = 60000;
    // end variable defining

    if (msgContent === cmdArray[0]) {
        msg.channel.send("Hi, " + "<@" + msg.author.id + ">" + "! It's nice to talk to you! I get pretty lonely sometimes, because Zero keeps me in a box...");
    }
    else if (msgContent === cmdArray[1]) {
        msg.channel.send("Currently there is 13 possible commands, \n```\n*greet\n*help\n*detailedhelp\n*bully\n*invite\n*ark\n*helpjoinark\n*mc\n*helpjoinmc\n*online\n*purge (admin only)\n*math\n*event```");
    }
    else if (msgContent === cmdArray[2]) {
        msg.channel.send("Ouch! Someone help me I need an adult!! <@" + msg.author.id + "> is beating me!");
    }
    else if (msgContent === cmdArray[3]) {
        msg.channel.send("Here is a detailed list of commands -\n\n```*greet``` - Replies to you with a greeting\n\n```*help``` - Lists all supported commands\n\n```*detailedhelp``` - Shows advanced info on commands\n\n```*bully``` - Picks on our bot. Are you heartless?\n\n```*invite``` - Shows the Discord Invite Link" +
            "\n\n```*ark``` - Displays basic Ark info\n\n```*helpjoinark``` - Teaches you how to add favorite servers\n\n```*mc``` - Displays basic MC info\n\n```*helpjoinmc``` - Teaches you how to join our Minecraft Server\n\n```*online``` - Checks to see if the Bot is online" +
            "\n\n```*math``` - Let's you calculate any 2 numbers.\n Valid Format - ```InputNumber [Input  Math Operator such as +, -, *, /, ^] InputNumber```\n```*event``` - Shows our next upcoming event for the community");
    }
    else if (msgContent === cmdArray[4]) {
        msg.channel.send("https://discord.gg/vZ7KMAe");
    }
    else if (msgContent === cmdArray[5]) {
        msg.channel.send("We host all 6 story maps on a cluster. You can join anytime by using the links in <#663801407513821185>.");
    }
    else if (msgContent === cmdArray[6]) {
        msg.channel.send("Here is a list of our server IPs. You may copy and paste them directly into steam server favorites to save and join our server.\n\nThe Island - ```107.2.43.192:27102```\nScorched Earth - ```107.2.43.192:27106```\nAberration - ```107.2.43.192:27112```\nExtinction - ```107.2.43.192:27116```\nValguero - ```107.2.43.192:27120```\nGenesis Part 1 - ```107.2.43.192:27124```" +
            "\nOnce the IP you want is copied, head to steam. Navigate to View ---> Servers ---> Favorites ---> Add a Server | and just paste in the IP you copied. Now select Find Games at this Address and once found, add it to your favorites. This will let our servers appear in your favorites tab in game. Make sure to remove any old entries so you don\"t clutter your favorites tab.");
    }
    else if (msgContent === cmdArray[7]) {
        msg.channel.send("We host a public Minecraft server with 64 slots and over 35 game modes. You can join anytime by using the link in <#663415309671333898>");
    }
    else if (msgContent === cmdArray[8]) {
        msg.channel.send("For detailed help on joining our Minecraft server, head on over to this link -\n\nhttps://github.com/x0Z3ro0x/DKG-MC-Server/wiki/Joining-the-Server");
    }
    else if (msgContent === cmdArray[9]) {
        msg.channel.send("Did you really just ask me that <@" + msg.author.id + ">? Yes I am online and working as intended, who do you think I am, Nugget Bot? :rolling_eyes:");
    }
    else if (msgContent === cmdArray[11]) {
        const member = msg.member;
        if (member.roles.cache.has('615380530480939027')) {
            async function clear() {
                const msgFetch = await msg.channel.messages.fetch({ limit: 10 });
                msg.channel.bulkDelete(msgFetch);
            }
            clear();
        }
        else {
            msg.channel.send("Sorry Zero beat me until I learned not to let your user group access this command. I won't make that mistake again so come back when you are an OG or Admin.");
        }
    }
    else if (msgContent.includes(cmdArray[12])) {
        var args = msgContent.split(" ");
        var isNumber = Number(args[1]);
        var isNumber2 = Number(args[3]);
        var operator = args[2];

        if (operator === "+") {
            var calculation = isNumber + isNumber2;
            msg.channel.send(isNumber + " + " + isNumber2 + " = " + calculation);
        }
        else if (operator === "-") {
            var calculation = isNumber - isNumber2;
            msg.channel.send(isNumber + " - " + isNumber2 + " = " + calculation);
        }
        else if (operator === "/") {
            var calculation = isNumber / isNumber2;
            msg.channel.send(isNumber + " / " + isNumber2 + " = " + calculation);
        }
        else if (operator === "*") {
            var calculation = isNumber * isNumber2;
            msg.channel.send(isNumber + " * " + isNumber2 + " = " + calculation);
        }
        else if (operator === "^") {
            var calculation = isNumber ** isNumber2;
            msg.channel.send(isNumber + " ^ " + isNumber2 + " = " + calculation);
        }
    }
    else if (msgContent === cmdArray[13]) {
        var dateTimePackage = require("node-datetime");
        var nextClanEventDate = dateTimePackage.create(eventDate);
        var nextClanEventDateModify = dateTimePackage.create(eventDate);
        nextClanEventDateModify.offsetInHours(-7);
        var formatNextClanEventDate = nextClanEventDate.format(format);
        var formatNextClanEventDateModify = nextClanEventDate.format(format);
        var dateRightNow = dateTimePackage.create();
        var formatDateRightNow = dateRightNow.format(format);
        var dateRightNowInMs = new Date(formatDateRightNow);
        var clanEventIsMs = new Date(formatNextClanEventDateModify);
        var dateDifference = clanEventIsMs - dateRightNowInMs;
        var daysLeft = Math.floor(dateDifference / dayInMs);
        var remainder1 = dateDifference - (daysLeft * dayInMs);
        var hoursLeft = Math.floor(remainder1 / hourInMs);
        var remainder2 = remainder1 - (hoursLeft * hourInMs);
        var minutesLeft = Math.floor(remainder2 / minuteInMS);
        var msgArray = [
            "Our next event is on: ```" + formatNextClanEventDate + " midnight UTC```\nThis gives you ",
            + daysLeft + " days, ",
            + hoursLeft + " hours and ",
            + minutesLeft + " minutes until the event begins. ",
            "This event is for our ",
            "Ark server and will grant double XP on everything. Enjoy everyone!"
        ];
        if (daysLeft >= 1) {
            msg.channel.send(msgArray[0] + msgArray[1] + msgArray[2] + msgArray[3] + msgArray[4] + msgArray[5]);
        }
        else if (daysLeft >= 0 && hoursLeft > 0) {
            msg.channel.send(msgArray[0] + msgArray[2] + msgArray[3] + msgArray[4] + msgArray[5]);
        }
        else if (daysLeft >= 0 && minutesLeft > 0) {
            msg.channel.send(msgArray[0] + msgArray[3] + msgArray[4] + msgArray[5])
        }
        else if (true) {
            msg.channel.send("It doesn't look like we have any pending events right now. Feel free to suggest one in <#615500059127316490>");
        }
        
    }
    // End of command array

    // DK looting crates

    /*const msgToLower = msg.content.toLowerCase();

    if (msgToLower.includes("*dkcrate") && msg.author.bot === false) {
        // Split the string
        var decodeMessage = msgToLower.split(" ");
        // The variable with the split string contents is now an array

        // Console log the data
        console.log(decodeMessage);

        // attempt to convert second item in array to a number
        var correctNumber = Number(decodeMessage[1]);

        // Console log the data
        console.log(correctNumber);

        // Run math.floor on the second index to even out the number
        correctNumber = Math.floor(correctNumber);

        // Console log the data
        console.log(correctNumber);

        // Only run code if the first item in the array is !mediumclue and the second is a number between 1 and 10000

        if (decodeMessage[0] === "*dkcrate" && Number(correctNumber) && correctNumber > 10001 && decodeMessage.length == 2) {
            msg.channel.send("You cannot enter that number. The values must be between 1 and 10,000");
        }
        else if (decodeMessage[0] === "*dkcrate" && Number(correctNumber) && correctNumber < 10001 && correctNumber > 0 && decodeMessage.length == 2) {
            var easyChance = 333;
            var mediumChance = 666;
            var hardChance = 999;
            var itemsFromRoll = 0;
            var rollOnTable = 0;
            var totalEasyChance = 0;
            var totalMediumChance = 0;
            var totalHardChance = 0;

            // For loop that creates rolls on the medium clue table
            for (var i = 0; i < correctNumber; i++) {
                var itemsEachClue = Math.floor((Math.random() * 3) + 3);
                itemsFromRoll += itemsEachClue;
            }

            // Log the amount of items from the clue scrolls
            console.log(itemsFromRoll);

            // For loop for each item roll
            for (var i = 0; i < itemsFromRoll; i++) {
                rollOnTable = Math.floor((Math.random() * 1000) + 1);

                if (rollOnTable === easyChance) {
                    totalEasyChance++;
                }
                else if (rollOnTable === mediumChance) {
                    totalMediumChance++;
                }
                else if (rollOnTable === hardChance) {
                    totalHardChance++;
                }
            }
            msg.reply("You opend " + correctNumber + " loot crates, \nand you rolled " + itemsFromRoll + " times in total.\n"
                + "You received " + totalEasyChance + " easy crates " + totalMediumChance + " medium crates " + totalHardChance + " hard crates. Would you like to open these now or save them?");
        }
    }*/


});