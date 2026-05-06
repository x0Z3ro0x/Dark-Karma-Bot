function memberHasAnyRole(member, roleIds = []) {
    if (!member || !member.roles || !member.roles.cache) return false;

    if (roleIds.length === 0) {
        return true;
    }

    return roleIds.some(roleId => member.roles.cache.has(roleId));
}

function memberHasAllRoles(member, roleIds = []) {
    if (!member || !member.roles || !member.roles.cache) return false;

    if (roleIds.length === 0) {
        return true;
    }

    return roleIds.every(roleId => member.roles.cache.has(roleId));
}

module.exports = {
    memberHasAnyRole,
    memberHasAllRoles
};