//-----------------------------------BUSINESS LOGIC---------------------------//

// Holds total customer order information
function TotalOrder() {
  this.orders = [];
  console.log(this.orders);
};


TotalOrder.prototype.addOrder = function(PizzaConstructor) {
  this.orders.push(PizzaConstructor);

};

function PizzaConstructor(size, toppings){
this.size = size,
this.toppings = toppings,
this.pizzaID = pizzaID += 1;

console.log(PizzaConstructor);
}












//----------------------------------UI lOGIC----------------------------------//
var orderForm = new TotalOrder();
var pizzaID = 0;

$(document).ready(function(){
  $("#toppingButton").click(function() {
    var toppings = $("input[name='pizzaTopping']:checked").val();
    console.log(toppings);

  });
$('#sizeButton').click(function() {
  var inputSize = $("input[name='pizzaSize']:checked").val();
  console.log(inputSize);
  orderForm.addOrder(newPizza);
});

var newPizza = new PizzaConstructor(inputSize, toppings, pizzaID)
});
