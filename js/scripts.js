//-----------------------------------BUSINESS LOGIC---------------------------//

function TotalOrder() {
  this.orders = [];
};

function PizzaConstructor(inputSize, toppings) {
  this.size = inputSize,
  this.toppings = toppings;
};

TotalOrder.prototype.addOrder = function (addPizza) {
  this.orders.push(addPizza);
};

PizzaConstructor.prototype.pizzaCost = function() {
  return this.size + this.toppings;
}

$(document).ready(function () {
  let pizzaSizeCheck = document.getElementById('pizzaSize');
  let toppingsCheck = document.getElementById('toppings');

  $('#pizzaSize').click(function () {
    $(this).addClass("clicked");
  })

  $('#toppings').click(function () {
    $(this).addClass("clicked");
    if(pizzaSizeCheck.classList.contains('clicked') && toppingsCheck.classList.contains('clicked')) {
      console.log('yes');
      $('#total-button').css('display', 'block');
    } else {
      console.log('no');
    }
  })



})
//----------------------------------UI lOGIC----------------------------------//

var orderForm = new TotalOrder();

$(document).ready(function () {
  $('.formDiv').submit(function (event) {
    event.preventDefault();
    var inputSize = parseInt($('input:radio[name=pizzaSize]:checked').val(), 10);

    var toppings = 0
    $("#toppings input[type='checkbox']:checked").each(function (){
      toppings += parseInt(this.value, 10);
    });

    var newPizza = new PizzaConstructor(inputSize, toppings);
    orderForm.addOrder(newPizza);

    $('.output').text('Total:' + ' ' + newPizza.pizzaCost());

  });
});
