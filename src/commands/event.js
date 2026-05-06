const { channels } = require("../config/server.config");

module.exports = {
    name: "event",
    description: "A command to check for community events",

    async execute(msg, args) {
        const eventDate = new Date("2020-08-28T00:00:00Z");
        const now = new Date();

        const differenceMs = eventDate - now;

        if (differenceMs <= 0) {
            await msg.channel.send(
                `It doesn't look like we have any pending events right now. Feel free to suggest one in <#${channels.communityChat}>`
            );
            return;
        }

        const daysLeft = Math.floor(differenceMs / 86400000);
        const hoursLeft = Math.floor((differenceMs % 86400000) / 3600000);
        const minutesLeft = Math.floor((differenceMs % 3600000) / 60000);

        await msg.channel.send(
            "Our next event is on: ```8/28/2020 midnight UTC```\n" +
            `This gives you ${daysLeft} day(s), ${hoursLeft} hours and ${minutesLeft} minutes until the event begins. ` +
            "This event is for our Ark server and will grant double XP on everything. Enjoy everyone!"
        );
    }
};