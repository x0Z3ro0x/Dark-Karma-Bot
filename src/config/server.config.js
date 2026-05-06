/**
 * Dark Karma Bot - Server Configuration
 *
 * This is the main file users should edit when setting up the bot.
 * Most IDs in this file come from Discord.
 *
 * To get IDs:
 * 1. Open Discord Settings
 * 2. Go to Advanced
 * 3. Turn on Developer Mode
 * 4. Right-click a server/channel/role/user
 * 5. Click "Copy ID"
 */

module.exports = {
    /**
     * Command prefix
     *
     * Example:
     * *help
     * !help
     * ?help
     */
    prefix: "*",

    /**
     * Main Discord server ID
     */
    guildId: "615379184453156871",

    /**
     * User IDs
     *
     * These are specific Discord user accounts.
     * Useful for bot owners, developers, or ignored bot accounts.
     */
    users: {
        owner: "194132431551463424",

        // Bot/user IDs that should be ignored by certain systems
        ignoredBotUsers: [
            "697135587332980736",
            "710556819864420382"
        ]
    },

    /**
     * Channel IDs
     *
     * If your server does not use one of these features,
     * you can leave the value as an empty string: ""
     */
    channels: {
        moderationLog: "615509476317069315",

        supportInput: "822220047584854017",
        supportOutput: "851159403855216671",

        gameAssignment: "615402768211116035",
        helpMe: "615519151431090189",
        veil: "652708891485929492",
        welcome: "623254601008939009",

        communityChat: "615500059127316490",
        arkInfo: "663801407513821185",
        minecraftInfo: "663415309671333898"
    },

    /**
     * Cleanup / auto-delete timers
     *
     * Times are in milliseconds.
     * 1000 = 1 second
     */
    timers: {
        shortMessageDelete: 12000,
        normalMessageDelete: 20000,
        helpMessageDelete: 21000,
        detailedHelpDelete: 30000,
        supportConfirmDelete: 30000
    },

    /**
     * Role IDs
     *
     * These are named for the original Dark Karma server.
     * Users can rename these keys later if they know what they are doing,
     * but the easiest setup is to replace only the ID values.
     */
    roles: {
        og: "615380530480939027",
        staff: "615508552165097524",
        designDeveloper: "615507860389888020",
        codeDeveloper: "615507508668137493",
        manager: "761721046172041216",
        supportGuru: "664208918133735450",

        dkgMember: "615383423665700864",
        minecraft: "615512133999788042",
        ark: "615512297170796554",
        gamertag: "651982607776743426",
        twitch: "652279770129629219",
        cs: "763819991837179924",
        customTools: "615521211371225109",
        veilAccess: "615801839706832908"
    },

    /**
     * Permission groups
     *
     * Add as many role IDs as you want.
     *
     * [] means no role restriction.
     * Example:
     * adminCommands: [] means everyone can use admin commands.
     *
     * For normal use, keep admin commands restricted.
     */
    permissions: {
        adminCommands: [
            "615380530480939027",
            "615508552165097524",
            "615507860389888020",
            "615507508668137493",
            "761721046172041216",
            "664208918133735450"
        ],

        ownerOnlyCommands: [
            "615380530480939027"
        ],

        purgeCommands: [
            "615508127948996608",
            "615380530480939027"
        ],

        linkBypassRoles: [
            "615380530480939027",
            "615507508668137493",
            "615507860389888020",
            "615508127948996608",
            "615508552165097524",
            "664208918133735450",
            "669496793486065695"
        ]
    },

    /**
     * Moderation settings
     */
    moderation: {
        blockedWords: [
            "fuc",
            "bitch",
            "fag",
            "cunt",
            "shit",
            "bastard",
            "whore",
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
        ],

        /**
         * Channels where blocked-word moderation is ignored.
         */
        ignoredWordChannels: [
            "735577954523807866",
            "615510613925429259",
            "615802995208224768",
            "694654901803941927",
            "794348546862088242"
        ],

        /**
         * Channels where link moderation is ignored.
         */
        ignoredLinkChannels: [
            "735577954523807866",
            "615510613925429259",
            "615802995208224768",
            "794348546862088242"
        ],

        /**
         * If a message contains one of these, the bot treats it as a possible link.
         */
        linkTriggers: [
            "www",
            "http",
            ".com"
        ],

        /**
         * Links that normal users are allowed to post.
         * Add more as needed.
         */
        allowedLinks: [
            "https://discord.gg/vZ7KMAe",
            "https://tenor.com",
            "https://github.com",
            "https://open.spotify.com",
            "https://www.youtube.com"
        ]
    },

    /**
     * Reaction roles
     *
     * Users can add as many reaction-role rules as they want.
     *
     * channelId = channel where the reaction message exists
     * emojiName = custom emoji name or unicode emoji
     * roleId = role given/removed
     * ignoredUserIds = users ignored by this rule, usually bot IDs
     */
    reactionRoles: [
        {
            channelId: "623254601008939009",
            emojiName: "dkg",
            roleId: "615383423665700864",
            ignoredUserIds: ["697135587332980736"]
        },
        {
            channelId: "615402768211116035",
            emojiName: "mc",
            roleId: "615512133999788042",
            ignoredUserIds: ["697135587332980736"]
        },
        {
            channelId: "615402768211116035",
            emojiName: "ark",
            roleId: "615512297170796554",
            ignoredUserIds: ["697135587332980736"]
        },
        {
            channelId: "615402768211116035",
            emojiName: "gamertag",
            roleId: "651982607776743426",
            ignoredUserIds: ["697135587332980736"]
        },
        {
            channelId: "615402768211116035",
            emojiName: "twitch",
            roleId: "652279770129629219",
            ignoredUserIds: ["697135587332980736"]
        },
        {
            channelId: "615402768211116035",
            emojiName: "cs",
            roleId: "763819991837179924",
            ignoredUserIds: ["697135587332980736"]
        },
        {
            channelId: "615519151431090189",
            emojiName: "customtools",
            roleId: "615521211371225109",
            ignoredUserIds: ["697135587332980736"]
        },
        {
            channelId: "652708891485929492",
            emojiName: "lips1",
            roleId: "615801839706832908",
            ignoredUserIds: ["697135587332980736"]
        }
    ],

    /**
     * Support system settings
     */
    support: {
        embedColor: 0x800000,
        embedTitle: "Dark Karma Support",
        embedUrl: "https://discord.js.org",
        embedIconUrl: "https://i.imgur.com/wSTFkRM.png"
    },

        /**
     * Message templates
     *
     * These are long messages used by commands.
     * Users can freely edit these without touching code.
     */
        messages: {
        gameAssignment:
            `See fast and harmless! Alright let's continue. In addition to this awesome channel, you should ` +
            `be seeing some some general channels for making friends and just chatting. Please remember, ` +
            `if you ever need help for any reason, or to report someone, etc, do so within the support category ` +
            `by following the <#615519151431090189> channel. **NEVER** hesitate to use it day or night and someone will ` +
            `answer you as soon as they can.\n\nMoving on, this is where the magic happens when it comes to our ` +
            `servers! Take a look at the 'reaction' icons below this post. You might recognize some, others ` +
            `you might not. That's ok though as we will explain everything. The easiest recognized of the icons is ` +
            `probably the Minecraft icon. Simply enough, these icons assign you roles, just like the rules ` +
            `assigned you the member role, these icons will assign you to different games.\n\nWhat this does is ` +
            `allow us to keep the discord neat and clean while delivering the most efficient way to our ` +
            `services. So for instance, if you are here just to make friends and chill, you are already good ` +
            `to go. All you will need is your member role to begin talking in the <#615500059127316490> channel. However if ` +
            `you wanted access to say, the Minecraft channels, or other games we offer, then you would ` +
            `want to react by clicking that games icon below.\n\nSo Minecraft players would click the <:mc:651955585440415775> icon. ` +
            `Ark players would click the <:ark:615448597894529037> icon so on and so forth. If at anytime you need help ` +
            `understanding the icons and their respective games, please just head to the <#615519151431090189> channel.\n\n` +
            `In addition don't forget to check out our webstore - \n\n(https://www.dkgaming.us/)\n\nwhile you're at it. ` +
            `It's still a work in progress but we have a ton of stuff planned so keep checking back. Well what are you waiting for? ` +
            ` Get active and get gaming!\n\nBest of wishes,\nDKG`,

        helpMe:
            `Are you stuck? Need advice? Need a tag? Perhaps someone is breaking the rules? React with the <:customtools:748540738987622400> icon below and ` +
            `the support category will be shown to you, but **don't forget to click the icon AGAIN once you are done with support** ` +
            `to hide the support category. Otherwise things can start to get messy with a lot of channels visible.`,

        veil:
            `Are you looking to escape the family areas? No worries, we've got you covered, and we get it. Yes we are family based, ` +
            `but that doesn't mean we don't have an area for everyone..or know what it's like to need to get away from the children.\n\n` +
            `First and foremost let's get some things straight. I am not responsible for what you see in unfiltered rooms. Cussing ` +
            `is allowed with moderation. Normal social rules still apply. Many think 18 + means porn, no rules, and general Chaos. That may ` +
            `be the case elsewhere in the world, it's not the case here.\n\nEntering an adult area means we expect you to act like an ` +
            `adult. Children found in these areas will be instantly banned, without warning, from all non - family areas. What is ` +
            `a child? If you cannot differentiate between a mature adult, and a child, well then you have your answer and you should move on.\n\n` +
            `Now, this may be a 18 + area, but pornographic content is not allowed, take that sh** somewhere else. 18 + ` +
            `channels and areas simply means all the PG constraints of family areas are gone. Kids are in bed, and it's time ` +
            `for the adults to relax ;)\n\nIf you understand AND accept that as well as acknowledge the mental age requirements, ` +
            `then proceed by clicking the <:lips1:652712561959239690> reaction below.`,

        welcome:
            `Hello and Welcome to our Discord server! If you need any help at all, don't hesitate to ask, however let's get you assigned first! ` +
            `No worries, it's as easy as reading and clicking! *Let's begin*.\n\nPlease keep in mind we host MANY dedicated servers, and as you can imagine ` +
            `making all those channels visible, all at once, would be a nightmare. So for each game we host, we have a special role. That role unlocks or ` +
            `lets you see that game servers channel. Getting the role is very easy and can be done in the <#615402768211116035>. Head over there to ` +
            `take up a role, but before you do, finish up here. Ok moving onto the rules:\n\nWe have a few basic rules for you to check out. If they look good ` +
            `to you, make sure to agree to them! To do so, simply click the server icon under this post. It signals you've read our rules, agree to follow ` +
            `them, and you understand what we are about.\n\n** Rules -**\n` +
            `> *1.) Stay Classy*\n` +
            `> *2.) Be respectful to everyone, not just staff*\n` +
            `> *3.) No advertising please, YT & Twitch Channel ADs are welcome in self promo*\n` +
            `> *4.) Remember to stay active*\n` +
            `> *5.) Power abuse is **NOT** tolerated.Report anyone breaking this rule to an __OG__*\n` +
            `> *6.) Not everyone here is an adult.There is a lot of family and kids here.Keep it PG unless in adult zones please*\n` +
            `\nI told you, just reading and clicking. Now remember becoming a member is important to unlocking your benefits throughout our servers..You ` +
            `will only be able to access the <#623231137988345889> until you reach member status by accepting our rules. Alright, as long as you are ` +
            `cool with everything, smash that server icon below and you'll be ported off on your journey.\n\nSee you there!`
    }
};