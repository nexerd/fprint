exports.SignIn = function(req, res)
{
    res.render('signin', { title: 'Express' });
}

exports.SignUp = function(req, res)
{
    res.render('signup', { title: 'Express' });
}