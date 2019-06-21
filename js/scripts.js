//-----------------------------------BUSINESS LOGIC---------------------------//

// Holds total customer order information
function TotalOrder() {
  this.orders = [];
};

TotalOrder.prototype.addOrder = function (PizzaConstructor) {
  this.orders.push(PizzaConstructor);

};

// Template for each pizza
function PizzaConstructor(toppings, size) {
  this.toppings = toppings,
  this.size = size,
};












//----------------------------------UI lOGIC----------------------------------//

$(document).ready(function(){
  var orderForm = new TotalOrder();
});
