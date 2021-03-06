let UsersData = require("../data/users");

exports.IsAuthorized = function(req, res, next)
{
    let id = req.cookies.id;
    let user = UsersData.GetUserById(id);
    if (user)
    {
        next();
    }
    else
    {
        res.redirect("/user/signin");
    }
}

exports.SignUp = function(req, res, next)
{
    let login = req.body.login;
    let password = req.body.password;
    let name = req.body.name;
    let id = UsersData.CreateUser(name, login, password);
    if (id != -1)
    {
        res.cookie("id", id);
        res.redirect("/");
    }
    res.redirect("/user/signup");
        
}

exports.SignIn = function(req, res, next)
{
    let login = req.body.login;
    let password = req.body.password;
    let user = UsersData.GetUserByLogin(login);
    if (user && user.password == password)
    {
        res.cookie("id", user.id);
        res.redirect("/");
    }
    else
    {
        res.redirect("/user/signin");
    }
}

exports.SignOut = function(req, res, next)
{
    res.clearCookie('id');
}

exports.MobileSignIn = function(req, res, next)
{
    let login = req.body.login;
    let password = req.body.password;
    let user = UsersData.GetUserByLogin(login);
    if (user && user.password == password)
    {
        res.cookie("id", user.id);
        res.send(user);
    }
    else
    {
        res.status(401).send({ message: 'Неправильынй логин или пароль' });
    }
}

exports.MobileIsAuthorized = function(req, res, next)
{
    let id = req.cookies.id;
    let user = UsersData.GetUserById(id);
    if (user)
    {
        next();
    }
    else
    {
        res.status(401).send({ message: 'Необходима авторизация' });
    }
}