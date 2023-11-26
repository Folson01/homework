const toppings = ["pepperoni", "PineApple", "Mushrooms", "Onions"];

//2
function GreetCustomer() {
  CustomerGreeting = `Welcome to Frontier pizza, our toppings include ${toppings}.`;
  //let CustomerGreeting;
  for (let list of toppings) console.log(CustomerGreeting);
   // return CustomerGreeting;
}
//3
function GetPizzaOrder(size, crust, ...topping) {
  let orderisready = `one ${size}, ${crust} crust pizza with ${topping} coming up!`;
  console.log(orderisready);
  return [size, crust, topping];
}

//4
function preparePizza([size, crust, topping]) {
  console.log("cooking Pizza");
  let pizza = {
    size: size,
    topping: topping,
    crust: crust
  };
  return pizza;
}

//5
function servePizza(pizza) {
  console.log(
    `order up! heres your, ${pizza.size}, ${pizza.crust}, with, ${pizza.topping}. enjoy!`
  );
}
//6
GreetCustomer();
GetPizzaOrder("small", "thick", "mushroom");
servePizza(preparePizza(GetPizzaOrder("small", "thick", "mushroom")));

