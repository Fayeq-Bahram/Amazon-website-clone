
export let cart = JSON.parse(localStorage.getItem('cart'));
   
      if(!cart){
         cart =  [{
            productName: 'Black and Grey Athletic Cotton Socks - 6 Pairs',
            quantity: 0
      
         },{ 
            productName: 'Adults Plain Cotton T-shirts - 2 Packs',
            quantity: 0
      }];
      }
      

 function saveToStorage(){
   localStorage.setItem('cart', JSON.stringify(cart));
 }

//...........................................................................

export function addToCart(productName){
   let matchingItem;
      cart.forEach((cartItem) => {
         if (productName === cartItem.productName){
            matchingItem = cartItem;
         }
      });

      if (matchingItem){
         matchingItem.quantity += 1;
      } else {
         cart.push({
            productName: productName,
            quantity: 1,
         });
      }


      saveToStorage();
};


//...........................................................................
let cartQuantity;
export function updateCartQuantity(){
   let cartQuantity = 0;
   cart.forEach((item) => {
   cartQuantity += item.quantity;
   });

  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
};


//................................................................

export function removeFromCart(productName){
   const newCart = [];

   cart.forEach((cartItem) =>{
      if (cartItem.productName !== productName){
         newCart.push(cartItem);
      }
   });
   cart = newCart;
   saveToStorage();
   
};

  
