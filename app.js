// Declare required modules
const discord = require("discord.js");
const math = require("mathjs");
const fs = require("fs");
const ping = require("minecraft-server-util");

// Declare variables
const cmdPrefix = "*";

// Initialize discord client and assign it to client variable | In addition we retrieve and require our authentication token
const client = new discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

// Initialize and declare our command files
client.commands = new discord.Collection();
const commandFiles = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(`./Commands/${file}`);
    client.commands.set(command.name, command);
}

// declare our token and login the bot using the token
const {
    token
} = require("./auth.json");
client.login(token);

// no no word array
const nonoWordArray = [
    "fuc",
    "bitch",
    "fag",
    "cunt",
    "shit",
    "bastard",
    "whore",
    "shit",
    "nig",
    "spic",
    "beaner",
    "slut",
    "inbred",
    "retard",
    "twat",
    "spastic",
    "tosser",
    "spaz",
    "slag"
];

// Don't moderate these channels
const ignoredChannels = [
    "735577954523807866",
    "615510613925429259",
    "615802995208224768",
    "694654901803941927",
    "794348546862088242"
];

const ignoredChannels2 = [
    "735577954523807866",
    "615510613925429259",
    "615802995208224768",
    "794348546862088242"
];

// Link triggers
const triggers = [
        "www",
        "http",
        ".com"
    ];

// Allowed links
const dkgInvite = "https://discord.gg/vZ7KMAe";

// Print off to console to let us know the bot is online, and to show us if the bot is trying to reconnect due to any kind of issue. Most likely internet or server outage
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("reconnecting", () => {
    console.log(`${client.user.tag} is trying to reconnect!`);
});

// Begin listening to messages
client.on("message", async (msg, msgCustom) => {
    // listen for commands in our command files
    ///* ---------- FAIL SAFE LINE ----------
    // Chat Moderation
    const msgContent = msg.content.toLowerCase();

    // Naughty words check
    for (var i = 0; i < nonoWordArray.length; i++) {
        if (msgContent.includes(nonoWordArray[i]) && !ignoredChannels.includes(msg.channel.id) && msg.author.bot === false) {
            msg.delete();
            msg.channel.send("Please stop cussing, <@" + msg.author.id + ">!").then(msg => {
                msg.delete({ timeout:12000 })});
            msg.client.channels.cache.get("615509476317069315").send("I just removed some content posted by - \n\n" + "<@" + msg.author.id + ">" + "\n\nHere is the content I removed -\n\n```" + msg.content + "```");
            break;
        }
    };
    
    // Naughty links check
    for (var i = 0; i < triggers.length; i++) {
        var member = msg.member;
        if (msgContent.includes(triggers[i]) && !ignoredChannels2.includes(msg.channel.id) && msg.content !== dkgInvite && msg.author.bot === false) {
            if (!member.roles.cache.has("615380530480939027" || "615507508668137493" || "615507860389888020" || "615508127948996608" || "615508552165097524" || "664208918133735450" || "669496793486065695")) {
                if(msg.content.includes('\n')) {
                    msg.delete();
                    msg.channel.send("I detected a break in your link. Fix this and try to post your link again.").then(msg => {
                        msg.delete({ timeout:12000 })});
                    msg.client.channels.cache.get("615509476317069315").send("I just removed some content posted by - \n\n" + "<@" + msg.author.id + ">" + "\n\nHere is the content I removed -\n\n```" + msg.content + "```");
                    break;
                }
                else if (msg.content.includes(' ')) {
                    msg.delete();
                    msg.channel.send("I detected spacing in your link. Fix this and try to post your link again.").then(msg => {
                        msg.delete({ timeout:12000 })});
                    msg.client.channels.cache.get("615509476317069315").send("I just removed some content posted by - \n\n" + "<@" + msg.author.id + ">" + "\n\nHere is the content I removed -\n\n```" + msg.content + "```");
                    break;
                }
                else if (msgContent.includes("https://tenor.com") || msgContent.includes("https://github.com") || msgContent.includes("https://open.spotify.com") || msgContent.includes("https://www.youtube.com")) {
                    break;
                }
                else {
                    msg.delete();
                    msg.channel.send("<@" + msg.author.id + ">, I have detected an illegal link. Removing now...\n\nContinuing to post these links will result in a ban.").then(msg => {
                        msg.delete({ timeout:12000 })});
                    msg.client.channels.cache.get("615509476317069315").send("I just removed some content posted by - \n\n" + "<@" + msg.author.id + ">" + "\n\nHere is the content I removed -\n\n```" + msg.content + "```");
                    console.log(member.roles.cache);
                    break;
                }
            }
        }
    };

    // Support Moderation
    if (msg.channel.id == "822220047584854017" && msg.author.id != 697135587332980736) {
        const guildID = client.guilds.cache.get("615379184453156871");
        const role = guildID.roles.cache.find(role => role.id === "664208918133735450");
        
        msg.delete();
        var caseNum = 0;

        const supportEmbed = {
            color: 0x800000,
            title: "Dark Karma Support",
            url: 'https://discord.js.org',
            author: {
                name: "Case Number - #" + caseNum,
                icon_url: 'https://i.imgur.com/wSTFkRM.png',
            },
            description: "<@" + msg.author.id + "> needs some help asap please!",
            thumbnail: {
                url: 'https://i.imgur.com/wSTFkRM.png',
            },
            fields: [
                {
                    name: "Issue -",
                    value: msg.content,
                },
                /*{
                    name: "\u200b",
                    value: "\u200b",
                    inline: false,
                },
                {
                    name: "Inline field title",
                    value: "field value",
                    inline: true,
                },
                {
                    name: "Inline field title",
                    value: "field value",
                    inline: true,
                },
                {
                    name: "Inline field title",
                    value: "field value",
                    inline: true,
                },
                */
            ],
            image: {
                url: 'https://i.imgur.com/wSTFkRM.png',
            },
            timestamp: new Date(),
            footer: {
                text: "Case created",
                icon_url: 'https://i.imgur.com/wSTFkRM.png',
            },
        };

        msg.client.channels.cache.get("851159403855216671").send("<@&" + role.id + ">");
        msg.client.channels.cache.get("851159403855216671").send({ embed: supportEmbed });

        msg.channel.send("Thanks a lot for the support ticket. Please be patient while a Support Guru reads " +
            "over your case. If more information is needed or Support Guru's reach a solution, they will reach " +
            "out to you.").then(msg => {
                msg.delete({ timeout: 30000 })
            });
        return;
    };
    // end of Chat Moderation
    
    if (!msg.content.startsWith(cmdPrefix) || msg.author.bot) return;
    const args = msg.content.slice(cmdPrefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (!client.commands.has(command)) return;
    
    try {
        client.commands.get(command).execute(msg, args);
    } catch (error) {
        console.error(error);
        msg.channel.send("<@194132431551463424>, There was an issue executing this command! Please figure it out when you can!");
    }
    // end of command listening
    //*/

    /* ---------- TESTING WORKSPACE LINE ----------
    const msgContent = msg.content.toLowerCase();

    if (msgContent.startsWith("*test") && msgContent.endsWith("*test")) {
        var msgArgs = msg.content.split(" ");
        const member = msg.member;
        
        
        if (member.roles.cache.has("615380530480939027")) {
            //msg.channel.send("I am online and functional. Are you ready to do some work sir?");

            // Test code for a new kick system 

            /*var mentionedUser = msg.mentions.users.first();
            const args = msg.content.slice(1).trim().split(/ +/);
            function getUserFromMention(mention) {
                if (!mention) return;

                if (mention.startsWith('<@') && mention.endsWith('>')) {
                    mention = mention.slice(2, -1);

                    if (mention.startsWith('!')) {
                        mention = mention.slice(1);
                    }

                    return client.users.cache.get(mention);
                }
            }

            if (args[0]) {
                const user = getUserFromMention(args[1]);
                if (!user) {
                    return msg.channel.send("Are you stupid or tired? You didn't mention a user.");
                }
                else if (user) {
                    var authorID = mentionedUser.id;
                    var userRoles = msg.guild.members.cache.get(authorID);

                    if (userRoles.roles.cache.has("615380530480939027") || userRoles.roles.cache.has("615508552165097524")) {
                        return msg.channel.send("You cannot kick Admins and higher. Remove their role and try again!");
                    }
                    else {
                        var userKicked = msg.guild.member(mentionedUser);
                        userKicked.kick();
                        return msg.channel.send("You mentioned -  " + user.username + ". I kicked them from the community so fast it made their head spin.");
                    }
                }
                else {
                    return msg.channel.send("There seems to be an issue. I didn't catch an undefined user, yet no user was mentioned. Contact x0Z3ro0x for assistance.");
                }
            }
        }
        else {
            msg.channel.send("Sorry! Zero beat me until I learned not to let your user group access this command. I won't make that mistake again, so come back when you are an Admin or higher.")
        }
    }
    //*/
});

client.on("messageReactionAdd", async (reaction, user) => {
    /* ---------- TESTING WORKSPACE LINE ----------
    var reactMSG = reaction.message;

    if (reactMSG.channel.id === "735577954523807866" && user.bot === false) {
        var msgCustom = "One step closer!";
        
        client.emit("message");
    }
    else {
        return;
    }
    //*/
    ///* ---------- FAIL SAFE LINE ----------
    const { guild } = reaction.message;

    if (reaction.message.channel.id === "623254601008939009" && reaction._emoji.name === "dkg") {
        if (user.id === "710556819864420382") {

        }
        else {
            const role = guild.roles.cache.find((role) => role.id === "615383423665700864");
            const member = guild.members.cache.find((member) => member.id === user.id);
            member.roles.add(role);
        }
    }
    else if (reaction.message.channel.id === "615402768211116035" && reaction._emoji.name === "mc") {
        if (user.id === "697135587332980736") {

        }
        else {
            const role = guild.roles.cache.find((role) => role.id === "615512133999788042");
            const member = guild.members.cache.find((member) => member.id === user.id);
            member.roles.add(role);
        }
    }
    else if (reaction.message.channel.id === "615402768211116035" && reaction._emoji.name === "ark") {
        if (user.id === "697135587332980736") {

        }
        else {
            const role = guild.roles.cache.find((role) => role.id === "615512297170796554");
            const member = guild.members.cache.find((member) => member.id === user.id);
            member.roles.add(role);
        }
    }
    else if (reaction.message.channel.id === "615402768211116035" && reaction._emoji.name === "gamertag") {
        if (user.id === "697135587332980736") {

        }
        else {
            const role = guild.roles.cache.find((role) => role.id === "651982607776743426");
            const member = guild.members.cache.find((member) => member.id === user.id);
            member.roles.add(role);
        }
    }
    else if (reaction.message.channel.id === "615402768211116035" && reaction._emoji.name === "twitch") {
        if (user.id === "697135587332980736") {

        }
        else {
            const role = guild.roles.cache.find((role) => role.id === "652279770129629219");
            const member = guild.members.cache.find((member) => member.id === user.id);
            member.roles.add(role);
        }
    }
    else if (reaction.message.channel.id === "615402768211116035" && reaction._emoji.name === "cs") {
        if (user.id === "697135587332980736") {

        }
        else {
            const role = guild.roles.cache.find((role) => role.id === "763819991837179924");
            const member = guild.members.cache.find((member) => member.id === user.id);
            member.roles.add(role);
        }
    }
    else if (reaction.message.channel.id === "615519151431090189" && reaction._emoji.name === "customtools") {
        if (user.id === "697135587332980736") {

        }
        else {
            const role = guild.roles.cache.find((role) => role.id === "615521211371225109");
            const member = guild.members.cache.find((member) => member.id === user.id);
            member.roles.add(role);
        }
    }
    else if (reaction.message.channel.id === "652708891485929492" && reaction._emoji.name === "lips1") {
        if (user.id === "697135587332980736") {

        }
        else {
            const role = guild.roles.cache.find((role) => role.id === "615801839706832908");
            const member = guild.members.cache.find((member) => member.id === user.id);
            member.roles.add(role);
        }
    }
    //*/
});

client.on("messageReactionRemove", async (reaction, user) => {
    ///* ---------- FAIL SAFE LINE ----------
    const { guild } = reaction.message;

    if (reaction.message.channel.id === "623254601008939009" && reaction._emoji.name === "dkg") {
        const role = guild.roles.cache.find((role) => role.id === "615383423665700864");
        const member = guild.members.cache.find((member) => member.id === user.id);
        member.roles.remove(role);
    }
    else if (reaction.message.channel.id === "615402768211116035" && reaction._emoji.name === "mc") {
        const role = guild.roles.cache.find((role) => role.id === "615512133999788042");
        const member = guild.members.cache.find((member) => member.id === user.id);
        member.roles.remove(role);
    }
    else if (reaction.message.channel.id === "615402768211116035" && reaction._emoji.name === "ark") {
        const role = guild.roles.cache.find((role) => role.id === "615512297170796554");
        const member = guild.members.cache.find((member) => member.id === user.id);
        member.roles.remove(role);
    }
    else if (reaction.message.channel.id === "615402768211116035" && reaction._emoji.name === "gamertag") {
        const role = guild.roles.cache.find((role) => role.id === "651982607776743426");
        const member = guild.members.cache.find((member) => member.id === user.id);
        member.roles.remove(role);
    }
    else if (reaction.message.channel.id === "615402768211116035" && reaction._emoji.name === "twitch") {
        const role = guild.roles.cache.find((role) => role.id === "652279770129629219");
        const member = guild.members.cache.find((member) => member.id === user.id);
        member.roles.remove(role);
    }
    else if (reaction.message.channel.id === "615402768211116035" && reaction._emoji.name === "cs") {
        const role = guild.roles.cache.find((role) => role.id === "763819991837179924");
        const member = guild.members.cache.find((member) => member.id === user.id);
        member.roles.remove(role);
    }
    else if (reaction.message.channel.id === "615519151431090189" && reaction._emoji.name === "customtools") {
        const role = guild.roles.cache.find((role) => role.id === "615521211371225109");
        const member = guild.members.cache.find((member) => member.id === user.id);
        member.roles.remove(role);
    }
    else if (reaction.message.channel.id === "652708891485929492" && reaction._emoji.name === "lips1") {
        const role = guild.roles.cache.find((role) => role.id === "615801839706832908");
        const member = guild.members.cache.find((member) => member.id === user.id);
        member.roles.remove(role);
    }
    //*/
});
