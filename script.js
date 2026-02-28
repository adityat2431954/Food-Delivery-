function addToCart(food){

let cart = document.getElementById("cartItems");

let li = document.createElement("li");
li.textContent = food + " added ✅";

cart.appendChild(li);

}