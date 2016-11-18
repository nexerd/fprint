var orderModel = require("../models/order");
var Order_Status = require("../models/order_status");

var orders = [ new orderModel("a21hv", 0, "Лаб 1. ТПР", 0, 0, Order_Status.NotAccepted, 100)];

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

exports.AddOrder = function(fileName, user_id)
{
    let id = orders.length;
    orders.push(new orderModel(id, fileName, user_id, Order_Status.NotAccepted));
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

