function createJSONUser(user) {
    return {
        "id": user.id,
        "name": user.name,
    };
}

module.exports = createJSONUser;