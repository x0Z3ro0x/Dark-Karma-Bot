/*
const discord = require("discord.js");
const client = new discord.Client();
const cmdPrefix = "*";

module.exports = {
    name: "dkcrate",
    description: "A command for getting a Dark Karma loot crate",
    execute(msg, args) {
        const msgToLower = msg.content.toLowerCase();
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
    }
};
*/