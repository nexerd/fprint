let OrdersData = require("../data/orders");

exports.UserOrders = function(req, res)
{
    let id = req.cookies.id;
    let orders = OrdersData.GetOrdersByUserId(id);
    res.render('user_orders', { title: 'Express', orders: orders } );
}

exports.MakeOrderView = function(req, res)
{
    res.render('make_order', { title: 'Express' } );
}

exports.MakeOrder = function(req, res)
{
    let id = req.cookies.id;
    let file_name = req.body.file_name;
    if (file_name)
    {
        let new_order_id = OrdersData.MakeOrder(file_name, id, Math.round(Math.random() * 10000) / 100);
        if (new_order_id)
        {  
            res.redirect("/orders");  
            return;  
        }    
    }
    res.redirect("/make_order");
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