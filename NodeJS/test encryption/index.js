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

const decryptionResult = cryptico.decrypt(encryptionResult.cipher, RSAKey);

console.log(publicKey);
console.log('------');
console.log(encryptionResult);
console.log('--------');
console.log(encryptionResult.cipher);
console.log('------');
console.log(decryptionResult.plaintext);
console.log('-----');
console.log(publicKey === publicKey2);

