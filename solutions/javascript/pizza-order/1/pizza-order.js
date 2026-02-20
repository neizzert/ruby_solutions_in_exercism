export class PizzaOrder{
    constructor(pizza, ...extras){
       this.pizza = pizza
       this.extras = extras
    }
}
export function getPrice(pizza) {
    if (pizza == "Margherita" ) return 7
    else if (pizza == "Caprese") return 9
    else if (pizza == "Formaggio" ) return 10
}
export function pizzaPrice(pizza, ...extras) {
    let getPricePizza = getPrice(pizza)
    let totalPrice  = 0
    if (extras.length == 0) return getPrice(pizza)
    else if (extras.length == 1) {
        if (extras[0] == "ExtraSauce") totalPrice = getPricePizza + 1
        else if (extras[0] == "ExtraToppings") totalPrice  = getPricePizza + 2
    }    

    totalPrice = getPricePizza

    for (const extra of extras) {
        if (extra == "ExtraSauce") totalPrice += 1
        else if (extra === "ExtraToppings") totalPrice += 2
    }
    return totalPrice    
}

export function orderPrice(pizzaOrders) {
    let totalPriceOrder = 0
    for (const order of pizzaOrders) totalPriceOrder += pizzaPrice(order.pizza, ...order.extras)
    return totalPriceOrder
}