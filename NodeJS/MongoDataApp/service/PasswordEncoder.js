const cryptico = require('cryptico');

module.exports = class PasswordEncoder {
    constructor(username, password) {
        this.password = password;
        this.passPhrase = username + username;
        this.bits = 1024;
        this.RSAkey = cryptico.generateRSAKey(this.passPhrase, this.bits);
        this.publicKey = cryptico.publicKeyString(this.RSAkey);
    }

    encodePassword() {
        return cryptico.encrypt(this.password, this.publicKey);
    }
};