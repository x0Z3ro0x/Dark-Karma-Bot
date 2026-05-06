const {
    supportInputChannelId,
    supportOutputChannelId,
    supportRoleId,
    ignoredSupportUserIds,
    embedColor,
    embedTitle,
    embedUrl,
    embedIconUrl
} = require("../config/support.config");

function isSupportMessage(msg) {
    if (msg.channel.id !== supportInputChannelId) return false;
    if (ignoredSupportUserIds.includes(msg.author.id)) return false;
    if (msg.author.bot) return false;

    return true;
}

function createCaseNumber() {
    return Date.now();
}

function createSupportEmbed(msg, caseNum) {
    return {
        color: embedColor,
        title: embedTitle,
        url: embedUrl,
        author: {
            name: `Case Number - #${caseNum}`,
            icon_url: embedIconUrl
        },
        description: `<@${msg.author.id}> needs some help asap please!`,
        thumbnail: {
            url: embedIconUrl
        },
        fields: [
            {
                name: "Issue -",
                value: msg.content || "No issue text provided."
            }
        ],
        image: {
            url: embedIconUrl
        },
        timestamp: new Date(),
        footer: {
            text: "Case created",
            icon_url: embedIconUrl
        }
    };
}

async function handleSupportMessage(msg) {
    if (!isSupportMessage(msg)) return false;

    await msg.delete();

    const outputChannel = msg.client.channels.cache.get(supportOutputChannelId);
    if (!outputChannel) {
        console.warn(`[SUPPORT] Could not find support output channel: ${supportOutputChannelId}`);
        return true;
    }

    const caseNum = createCaseNumber();
    const supportEmbed = createSupportEmbed(msg, caseNum);

    await outputChannel.send(`<@&${supportRoleId}>`);
    await outputChannel.send({ embed: supportEmbed });

    msg.channel.send(
        "Thanks a lot for the support ticket. Please be patient while a Support Guru reads " +
        "over your case. If more information is needed or Support Guru's reach a solution, they will reach " +
        "out to you."
    )
        .then(reply => reply.delete({ timeout: 30000 }))
        .catch(console.error);

    return true;
}

module.exports = {
    handleSupportMessage
};