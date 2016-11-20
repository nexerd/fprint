var userModel = require("../models/user");

var users = [ new userModel(0, "Витайлий", "1", "1") ];

exports.GetUserById = function(id)
{
     return users[id];
}

exports.GetUserByLogin = function(login)
{
    for (let i = 0; i < users.length; i++)
        if (users[i].login == login)
           return users[i];
    return null;
}

exports.CreateUser = function(name, login, password)
{
    for (let i = 0; i < users.length; i++)
        if (users[i].login == login)
            return -1;
    var id = users.length;
    users.push(new userModel(id, name, login, password));
    return id;
}
