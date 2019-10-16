const jwt = require('jsonwebtoken');
const CONSTANT = require('../const');
module.exports = getCredentialsFromJWT = (token) =>{
    return jwt.verify(token, CONSTANT.SECRET);
};