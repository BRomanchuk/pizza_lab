var PizzaCart = require('pizza/PizzaCart');

function add_to_cart(pizza, size) {
    PizzaCart.addToCart(pizza, size);
}

var small_pizza = $('.small_size');
var big_pizza = $('.big_size');

var small_pizza_btn = small_pizza.find('.btn');
var big_pizza_btn = big_pizza.find('.btn');

small_pizza_btn.click(add_to_cart(this.parent))