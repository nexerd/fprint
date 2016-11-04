let OrdersData = require("../data/orders");

exports.UserOrders = function(req, res)
{
    let id = req.cookies.id;
    let orders = OrdersData.GetOrdersByUserId(id);
    res.render('user_orders', { title: 'Express', orders: orders } );
}