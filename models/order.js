class Order
{
    constructor(id, filename, user_id, printservice_id, status)
    {
        this.id = id;
        this.filename = filename;
        this.user_id = user_id;
        this.printservice_id = printservice_id;
        this.status = status;       
    }
}

module.exports = Order;