class Order
{
    constructor(hash, id, filename, user_id, printservice_id, status, price)
    {
        this.hash = hash;
        this.id = id;
        this.filename = filename;
        this.user_id = user_id;
        this.printservice_id = printservice_id;
        this.status = status;       
        this.price = price;
    }
}

module.exports = Order;