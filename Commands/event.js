const discord = require("discord.js");
const client = new discord.Client();
const cmdPrefix = "*";

module.exports = {
    name: "event",
    description: "A command to check for community events",
    execute(msg, args) {
        const eventDate = "2020-08-28 00:00:00";
        const format = "m/d/y H:M";
        var dayInMs = 86400000;
        var hourInMs = 3600000;
        var minuteInMS = 60000;
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
            + daysLeft + " day(s), ",
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
};