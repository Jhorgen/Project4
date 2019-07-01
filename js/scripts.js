//-----------------------------------BUSINESS LOGIC---------------------------//

function TotalOrder() {
  this.orders = [];
  console.log(this.orders);
};

function PizzaConstructor(inputSize, toppings) {
  this.size = inputSize,
  this.toppings = toppings;
};

TotalOrder.prototype.addOrder = function (addPizza) {
  this.orders.push(addPizza);
};

TotalOrder.prototype.pizzaCost = function(addCost) {
var newOrder = this.orders;
if (newOrder.orders.includes('10')) {
  console.log('hello world');
}
}


//----------------------------------UI lOGIC----------------------------------//

var orderForm = new TotalOrder();

$(document).ready(function () {
  $('.formDiv').submit(function (event) {
    event.preventDefault();
    var inputSize = parseInt($('input:radio[name=pizzaSize]:checked').val(), 10);

    var toppings = 0
    $("#theseCheck input[type='checkbox']:checked").each(function (){
      toppings += parseInt(this.value, 10);
    });

    // const total = inputSize + toppings;
    var newPizza = new PizzaConstructor(inputSize, toppings);
    orderForm.addOrder(newPizza);

    console.log(newPizza);

      // orderForm.addOrder(total);

  });
});
