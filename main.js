const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal);
    },
    allOrders: function() {
        return this.orders;
    }
}

const chickenComboMeal = {
    sandwichType: "chicken sandwich",
    fries: true,
    drinkSize: "large"
}

const burgerComboMeal = {
    sandwichType: "burger",
    fries: true,
    drinkSize: "small"
}

const wingsMeal = {
    sandwichType: "wings",
    fries: false,
    drinkSize: "medium"
}

// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(burgerComboMeal)
restaurant.placeOrder(wingsMeal)

// Invoke the function to return the list of all orders
const finishedOrders = restaurant.allOrders();

// Output all orders to the console using console.table()
console.table(finishedOrders);