var orderModel = require("../models/order");
var Order_Status = require("../models/order_status");

var orders = [ new orderModel("a21hv", 0, "Лаб 1. ТПР", 0, 0, Order_Status.NotAccepted, 100),
                new orderModel("a21hv", 1, "Лаб 2. КМ", 0, 1, Order_Status.Accepted, 1.5),
                new orderModel("a21hv", 2, "Лаб 3. Программирование под Android", 0, 2, Order_Status.Finished, 33.3),
            ];

exports.GetOrdersByUserId = function(user_id)
{
    let result = [];
    orders.forEach(o => { 
        if (o.user_id == user_id)
        {
            result.push(o);
        }
    });
    return result;
}

exports.MakeOrder = function(fileName, user_id, price)
{
    let id = orders.length;
    orders.push(new orderModel("new_hash", id, fileName, user_id, 0, Order_Status.NotAccepted, price));
    return id;
}

exports.SetOrderStatus = function (id, status)
{
    orders.forEach(o => { 
        if (o.id == id)
        {
            o.status = status;           
        }
    });
}

