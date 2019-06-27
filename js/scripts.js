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

//----------------------------------UI lOGIC----------------------------------//

// var orderForm = new TotalOrder();

// var inputSize = $("input[name='pizzaSize']:checked").val();
//
// var toppings = $("input[name='pizzaTopping']:checked").val();

$(document).ready(function () {
  $('.formDiv').submit(function (event) {
    event.preventDefault();
    var inputSize = $('input:radio[name=pizzaSize]:checked').val();
    console.log(inputSize);

    var toppings = $('input[name=pizzaTopping]:checked').each(function () {
      orderForm.newPizza.addOrder($(this).val());
      console.log(toppings);

      var newPizza = new PizzaConstructor(inputSize, toppings);
    });

  });
});
