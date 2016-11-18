class Order_Status 
{ 
    static get NotAccepted() { return NotAccepted;  }

    static get Accepted() { return Accepedt; }

    static get Rejected() { return Rejected; }

    static get Canceled() { return Canceled; }

    static get Finished() { return Finished; }

    static get Closed() { return Closed; }

    static get Name() { return "Статус заказа"; }

    static IsEqual(a, b)
    {
        return typeof a == typeof b;
    }
}
class NotAccepted extends Order_Status { static get Name() { return "Не принят"; } }
class Accepted extends Order_Status { static get Name() { return "Принят"; } }
class Rejected extends Order_Status { static get Name() { return "Отклонен"; } }
class Canceled extends Order_Status { static get Name() { return "Отменен"; } }
class Finished extends Order_Status { static get Name() { return "Выполнен"; } }
class Closed extends Order_Status { static get Name() { return "Закрыт"; } }

module.exports = Order_Status;
