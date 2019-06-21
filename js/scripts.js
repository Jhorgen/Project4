//-----------------------------------BUSINESS LOGIC---------------------------//

// Holds total customer order information
function TotalOrder() {
  this.orders = [];
  console.log(this.orders);
};

function PizzaConstructor(inputSize, toppings){
  this.size = inputSize,
  this.toppings = toppings,
  this.pizzaID = pizzaID += 1;

  TotalOrder.prototype.addOrder = function(PizzaConstructor) {
    this.orders.push(inputSize);
    this.orders.push(toppings);
  };

  TotalOrder.prototype.addTopping = function(size) {
    this.orders.push(inputSize)
  }

  TotalOrder.prototype.addTopping = function(topping) {
    this.orders.push(toppings)
  }


  console.log(PizzaConstructor);
}
















//----------------------------------UI lOGIC----------------------------------//

var orderForm = new TotalOrder();
var pizzaID = 0;
var inputSize = $("input[name='pizzaSize']:checked").val();
var newPizza = new PizzaConstructor(inputSize, toppings, pizzaID);
var toppings = $("input[name='pizzaTopping']:checked").val();

$(document).ready(function(){

  $("#sizeButton").click(function() {
    addThis();
    console.log(inputSize);
    $('input[name="pizzaSize"]:checked').each(function() {
    newPizza.addOrder($(this).val());
    console.log(sizeArray)
  });

  $('#toppingButton').click(function() {
    console.log(toppings);
    $("input[name='pizzaTopping']:checked").each(function() {
      newPizza.addOrder(toppings);
    });
  });


  // function orderPizza() {
  //   $('newPizza').each(function() {
  //     newPizza.addorder($(this).val());
  //   });
  // };
});
});
