const password = '123123';
const cryptico = require('cryptico');
const bits = 1024;
const RSAKey= cryptico.generateRSAKey(password, bits);


console.log(RSAKey);
