import {products} from '/scripts/products.js';
import {cart, updateCartQuantity} from '/scripts/cart.js';
import {addToCart} from '/scripts/cart.js';


let productsHTML = '';

products.forEach((product) => {
   productsHTML += `<div class="product-container">
         <div class="product-picture ">
            <img class="picture" src="${product.image}">
         </div>
         <div class="product-info">
            <p class="text">${product.name}</p>
         </div>
         <div class="ratings">
            <p style="margin: 5px;">Ratings:</p> <div class="rating-text">${product.ratings}</div>
         </div>
         <div class="price-div">
            <p class="price">$${(product.price /100).toFixed(2)}</p>
         </div>
         <div class="select">
            <select>
               <option>1</option>
               <option>2</option>
               <option>3</option>
               <option>4</option>
               <option>5</option>
               <option>6</option>
               <option>7</option>
               <option>8</option>
               <option>9</option>
            </select>
         </div>
         <div class="div-button">
            <button class="button-add js-add-to-cart" 
            data-product-name ="${product.name}" 
            >Add to Cart</button>
         </div>
      </div>
      `;
      
});
    
document.querySelector('.js-content').innerHTML = productsHTML;



document.querySelectorAll('.js-add-to-cart')
 .forEach((button) => {
   button.addEventListener('click', () => {
      const productName = button.dataset.productName;  
      
      addToCart(productName);
      updateCartQuantity();
   //   deliverOption();

      });
   });
/*
 function updateCartQuantity(){
      let cartQuantity = 0;
      cart.forEach((item) => {
      cartQuantity += item.quantity;
      });
   
     document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
   };
*/

/*
 function addToCart(productName){
   let matchingItem;

   cart.forEach((cartItem) => {
      if (productName === cartItem.productName){
         matchingItem = cartItem;
      }
   });

   if (matchingItem){
      matchingItem.Quantity ++;
   
   }else{
      cart.push({
         productName: productName,
         Quantity: 1 
      })
   }
};
*/

/*
      let matchingItem;

      cart.forEach((item) => {
         if (productName === item.productName){
            matchingItem = item;
         }
      });
      if (matchingItem){
         matchingItem.quantity += 1;
      } else {
         cart.push({
            productName: productName,
            quantity: 1
         });
      }
*/
