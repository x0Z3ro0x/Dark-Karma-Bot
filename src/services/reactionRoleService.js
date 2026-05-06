const { reactionRoles, users } = require("../config/server.config");

function getEmojiName(reaction) {
    return reaction.emoji?.name;
}

function findReactionRole(reaction) {
    const channelId = reaction.message.channel.id;
    const emojiName = getEmojiName(reaction);

    return reactionRoles.find(rule =>
        rule.channelId === channelId &&
        rule.emojiName === emojiName
    );
}

async function fetchPartialReaction(reaction) {
    if (reaction.partial) {
        try {
            await reaction.fetch();
        } catch (err) {
            console.error("[REACTION ROLE] Failed to fetch partial reaction:", err);
            return false;
        }
    }

    if (reaction.message?.partial) {
        try {
            await reaction.message.fetch();
        } catch (err) {
            console.error("[REACTION ROLE] Failed to fetch partial message:", err);
            return false;
        }
    }

    return true;
}

async function getMember(guild, userId) {
    return guild.members.cache.get(userId) || await guild.members.fetch(userId).catch(() => null);
}

async function addReactionRole(reaction, user) {
    if (user.bot) return false;
    if (users.ignoredBotUsers.includes(user.id)) return false;

    const fetched = await fetchPartialReaction(reaction);
    if (!fetched) return false;

    const rule = findReactionRole(reaction);
    if (!rule) return false;

    const guild = reaction.message.guild;
    if (!guild) return false;

    const role = guild.roles.cache.get(rule.roleId);
    if (!role) {
        console.warn(`[REACTION ROLE] Could not find role: ${rule.roleId}`);
        return false;
    }

    const member = await getMember(guild, user.id);
    if (!member) {
        console.warn(`[REACTION ROLE] Could not find member: ${user.id}`);
        return false;
    }

    await member.roles.add(role).catch(err => {
        console.error(`[REACTION ROLE] Failed to add role ${rule.roleId} to ${user.id}:`, err);
    });

    return true;
}

async function removeReactionRole(reaction, user) {
    if (user.bot) return false;
    if (users.ignoredBotUsers.includes(user.id)) return false;

    const fetched = await fetchPartialReaction(reaction);
    if (!fetched) return false;

    const rule = findReactionRole(reaction);
    if (!rule) return false;

    const guild = reaction.message.guild;
    if (!guild) return false;

    const role = guild.roles.cache.get(rule.roleId);
    if (!role) {
        console.warn(`[REACTION ROLE] Could not find role: ${rule.roleId}`);
        return false;
    }

    const member = await getMember(guild, user.id);
    if (!member) {
        console.warn(`[REACTION ROLE] Could not find member: ${user.id}`);
        return false;
    }

    await member.roles.remove(role).catch(err => {
        console.error(`[REACTION ROLE] Failed to remove role ${rule.roleId} from ${user.id}:`, err);
    });

    return true;
}

module.exports = {
    addReactionRole,
    removeReactionRole
};