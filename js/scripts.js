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
    this.orders.push(PizzaConstructor);
  };

  TotalOrder.prototype.addTopping = function(size) {
    this.orders.push(inputSize)
  }

  TotalOrder.prototype.addTopping = function(topping) {
    this.orders.push(toppings)
  }


  console.log(PizzaConstructor);
}






var toppingArray = [];
// var newPizza = new PizzaConstructor(inputSize, toppings, pizzaID);






//----------------------------------UI lOGIC----------------------------------//
var orderForm = new TotalOrder();
var pizzaID = 0;



$(document).ready(function(){
  var sizeArray = TotalOrder.orders;

  function addThis() {


  };

  $("#sizeButton").click(function() {
    var inputSize = $("input[name='pizzaSize']:checked").val();
    console.log(inputSize);
    sizeArray.push(inputSize);
    console.log(sizeArray)
  });

  $('#toppingButton').click(function() {
    var toppings = $("input[name='pizzaTopping']:checked").val();
    console.log(toppings);
    $("input[name='pizzaTopping']:checked").each(function() {
      toppingArray.Push(toppings);
    });
  });


  // function orderPizza() {
  //   $('newPizza').each(function() {
  //     newPizza.addorder($(this).val());
  //   });
  // };
});
