//-----------------------------------BUSINESS LOGIC---------------------------//

// Holds total customer order information
function TotalOrder() {
  this.orders = [];
  console.log(this.orders);
};
console.log(TotalOrder.orders);
function PizzaConstructor(inputSize, toppings){
  this.size = inputSize,
  this.toppings = toppings,
  this.pizzaID = pizzaID += 1;
};

  TotalOrder.prototype.addOrder = function(addPizza) {
    this.orders.push(addPizza);
  };
  //
  TotalOrder.prototype.addTopping = function(size) {
    this.orders.push(inputSize)
  }

  TotalOrder.prototype.addTopping = function(topping) {
    this.orders.push(toppings)
  }



















//----------------------------------UI lOGIC----------------------------------//

var orderForm = new TotalOrder();
var pizzaID = 0;

  var inputSize = $("input[name='pizzaSize']:checked").val();
  var toppings = $("input[name='pizzaTopping']:checked").val();
  var newPizza = new PizzaConstructor(inputSize, toppings, pizzaID);


$(document).ready(function(){
  var inputSize = $("input[name='pizzaSize']:checked").val();
  $('input[name="pizzaSize"]:checked').each(function() {
    orderForm.newPizza.addOrder($(this).val());
    console.log(inputSize);
  });

  $("input[name='pizzaTopping']:checked").each(function() {
    var toppings = $("input[name='pizzaTopping']:checked").val();
    orderForm.newPizza.addOrder($(this).val());
  });
  $('totalButton').click(function(){
    $('.output').append(test);
});
});
