module.exports = class User {
    constructor(name, lastName, username) {
        this.name = name;
        this.lastName = lastName;
        this.username = username;
    }

    getName() {
        return this.name
    }

    getLastName() {
        return this.lastName;
    }

    getUsername() {
        return this.username;
    }

    changeUsername(username) {
        this.username = username;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }
};