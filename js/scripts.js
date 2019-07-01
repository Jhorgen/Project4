//-----------------------------------BUSINESS LOGIC---------------------------//

function TotalOrder() {
  this.orders = [];
  console.log(this.orders);
  this.currentId = 0

};

function PizzaConstructor(totalCost) {
  this.cost = totalCost
};

TotalOrder.prototype.addOrder = function (addPizza) {
  this.orders.push(addPizza);
  this.currentId += 1;
};


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

    const total = inputSize + toppings;

    var newPizza = new PizzaConstructor(totalCost);

    orderForm.addOrder(newPizza)

    console.log(newPizza);

    $('.output').text(orderForm.orders);


  });
});
