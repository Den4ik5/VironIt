const grantUserRights = (tokenCredentials, id) =>{
    return id === tokenCredentials.id;
};
const grantAdminRights = (tokenCredentials) =>{
    return tokenCredentials.isAdmin === true;
};
module.exports= {
    grantAdminRights,
    grantUserRights
};