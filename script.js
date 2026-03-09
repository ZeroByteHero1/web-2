const products = [

{ id:1, name:"Shoes", price:40 },
{ id:2, name:"Watch", price:60 },
{ id:3, name:"Headphone", price:30 },
{ id:4, name:"Phone", price:300 }

];

let cart = JSON.parse(localStorage.getItem("cart")) || [];


function displayProducts(list){

const productDiv = document.getElementById("products");

productDiv.innerHTML = "";

list.forEach(p => {

productDiv.innerHTML += `

<div class="product">

<h3>${p.name}</h3>

<p>$${p.price}</p>

<button onclick="addCart(${p.id})">Add To Cart</button>

</div>

`;

});

}


function addCart(id){

const product = products.find(p => p.id === id);

cart.push(product);

localStorage.setItem("cart", JSON.stringify(cart));

updateCart();

}


function updateCart(){

document.getElementById("cart-count").innerText = cart.length;

const cartItems = document.getElementById("cart-items");

cartItems.innerHTML="";

cart.forEach(item => {

cartItems.innerHTML += `<li>${item.name} - $${item.price}</li>`;

});

}


document.getElementById("search").addEventListener("keyup", function(){

let value = this.value.toLowerCase();

let filtered = products.filter(p =>

p.name.toLowerCase().includes(value)

);

displayProducts(filtered);

});


displayProducts(products);
updateCart();