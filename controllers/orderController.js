let OrdersData = require("../data/orders");

exports.UserOrders = function(req, res)
{
    let id = req.cookies.id;
    let orders = OrdersData.GetOrdersByUserId(id);
    res.render('user_orders', { title: 'Express', orders: orders } );
}

exports.MobileUserOrders = function(req, res)
{
    let id = req.cookies.id;
    let orders = OrdersData.GetOrdersByUserId(id);
    let buff = [];
    orders.forEach(o => 
    {
        buff.push(
            {
                hash: o.hash,
                id : o.id,
                filename : o.filename,
                user_id : o.user_id,
                printservice_id : o.printservice_id,
                status : o.status.Name, 
                price : o.price
            });
    });
    res.send(buff);
}