import {products, getProduct} from '/scripts/products.js';
import {cart, removeFromCart} from '/scripts/cart.js';

//console.log(products);

cart.forEach((cartItem) =>{
   const productName = cartItem.productName;
   let matchingProduct;

    matchingProduct = getProduct(productName);
  // console.log(matchingProduct);

})


export const orderSummary = 
` <p class="summary">Order Summary</p>
   <div class="order">
      <div class="text js-items">(Items) 0 </div><p class="text js-text"> $0</p>
   </div>
   <div class="order">
      <p class="text">Shipping & Handeling:</p> <p class="text js-shipping">$0</p>
   </div>
   <div class="order">
      <p class="text">Total before tax:</p> <p class="text js-total-before-tax">$0</p>
   </div>
   <div class="order">
      <p class="text">Extimated Tax (10%):</p> <p class="text js-tax">$0</p>
   </div>
   <div class="order-total">
      <p class="text"  style="color: rgb(199, 22, 22); font-weight: bold;">Order total:</p> 

      <p class="text js-order-total" style="color: rgb(199, 22, 22);  font-weight: bold;">$0</p>

      </div>
   <div class="div-order">
      <button class="order-button">Place your order</button>
   </div>   
`;

document.querySelector('.order-summary').innerHTML = orderSummary;


   