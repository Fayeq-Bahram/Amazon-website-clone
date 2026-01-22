import {cart} from '/scripts/cart.js';
import {getProduct} from '/scripts/products.js';


export function renderPaymentSummary(){

   let productPrice = 0;

   cart.forEach((cartItem)=>{
      const product = getProduct(cartItem.productName);
   
      console.log(product);
      
   })
  
};



