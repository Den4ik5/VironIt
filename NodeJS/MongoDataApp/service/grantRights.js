const grantUserRights = (tokenCredentials, id) =>{
    return id === tokenCredentials.id;
};
const grantAdminRights = (tokenCredentials) =>{
    return tokenCredentials.isAdmin === true;
};
const grantAccessToLeagues = (tokenCredentials, users) =>{
    return (users.indexOf(tokenCredentials.id)!== -1);
};
module.exports= {
    grantAdminRights,
    grantUserRights,
    grantAccessToLeagues
};