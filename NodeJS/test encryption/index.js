const password = '123123';
const userId = 'jg3kj1ggyuugkyuhe872y3j2k`123';
const passPhrase = userId;
const cryptico = require('cryptico');
const bits = 1024;
const RSAKey= cryptico.generateRSAKey(passPhrase, bits);
const RSAKEY2 = cryptico.generateRSAKey(passPhrase, bits);
const publicKey2 = cryptico.publicKeyString(RSAKEY2);
const publicKey = cryptico.publicKeyString(RSAKey);

const encryptionResult = cryptico.encrypt(password, publicKey);
const encryptionResult2 = cryptico.encrypt(password, publicKey2);

const decryptionResult2 = cryptico.decrypt(encryptionResult2.cipher, RSAKEY2);
const decryptionResult = cryptico.decrypt(encryptionResult.cipher, RSAKEY2);

console.log(decryptionResult === decryptionResult2);
console.log(RSAKEY2.toString() === RSAKey.toString());
console.log(publicKey===publicKey2);

