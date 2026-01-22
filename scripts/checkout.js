import {cart, removeFromCart} from '/scripts/cart.js';
import {products, getProduct} from '/scripts/products.js';
import {deliveryOption} from '/scripts/deliveryOptions.js';
import {orderSummary} from '/scripts/orderSummary.js';

import {renderPaymentSummary} from './paymentSummary.js';

//renderPaymentSummary();
let matchingProduct;


let cartSummaryHTML = '';

let cartHTML = '';

cart.forEach((cartItem) =>{
   const productName = cartItem.productName;
   let matchingProduct;
    matchingProduct = getProduct(productName);

/*
   products.forEach((product) => {
      if (product.name === productName){
         matchingProduct = product;
      }
   });
*/
///________________________________My written code___________________________________

document.querySelector('.js-text').innerHTML = `$${matchingProduct.price *(cartItem.quantity/100).toFixed(2) }`;
//document.querySelector('.js-text').innerHTML = `${matchingProduct.price + matchingProduct.price}`;
document.querySelector('.js-shipping').innerHTML = '$4.99'
document.querySelector('.js-total-before-tax').innerHTML = `$${(4.99 + matchingProduct.price *cartItem.quantity/100).toFixed(2) }`

let tax;
const taxRate = (matchingProduct.price *cartItem.quantity/100).toFixed(2)/100*10;
tax = (taxRate).toFixed(2);


document.querySelector('.js-tax').innerHTML = `$${tax}`
document.querySelector('.js-order-total').innerHTML = `$${(4.99 + taxRate + matchingProduct.price * cartItem.quantity / 100).toFixed(2)}`


//_____________________________________________________________________________________________

let cartQuantity = 0;
cart.forEach((item) => {
cartQuantity += item.quantity;
});
document.querySelector('.js-items').innerHTML = `Items (${cartQuantity})`;
document.querySelector('.js-checkout-text').innerHTML =`${cartQuantity}`;

   cartSummaryHTML +=
   `
      <div class="order-detail     js-item-container
         ">
            <div class="product">
               <img src="${matchingProduct.image}">
            </div>
         <div class="product-detail"> 
            <p class="product-name">${matchingProduct.name}</p>
            <p class="price">$${(matchingProduct.price / 100).toFixed(2)}</p>
            <p class="quantity">Quantity: ${cartItem.quantity}</p>
         <span class="update-link">Update 
         </span>

         <span class="delete-link js-delete-link" data-product-name="${matchingProduct.name}">Delete

         </span>
         </div>
             <div class="delivery-option">
                <p class="choose">Choose a Delivery Option</p>
                  <input  class="id-input" type="radio" name="option${matchingProduct.name}">
               <p class="id">Tuesday, June 21</p>
                        <p class="shipping">Free Shipping</p>
               <input checked class="id-input" type="radio"  name="option${matchingProduct.name}" >
               <p class="id">Wednseday, June 15</p>
                        <p class="shipping">$4.99 Shipping</p>
               <input class="id-input" type="radio"  name="option${matchingProduct.name}" >
               <p class="id">Tuesday, June 13</p>
                        <p class="shipping">$9.99 Shipping</p>
               </div>
            
            <div class="div-delivery"><p class="delivery-text">Delivery Date: Wednesday, June 15</p>
            </div>
      </div>

   `;
});

document.querySelector('.js-order-detail').innerHTML = cartSummaryHTML;


document.querySelectorAll('.js-delete-link')
.forEach((link) => {
  link.addEventListener('click', ()=>{
     const productName = link.dataset.productName;
      removeFromCart(productName);
   
//   console.log(cart);

     const container = document.querySelector(
         '.js-item-container'
      );
      container.remove();
//   console.log(container);

   });
});


 

