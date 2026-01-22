
export const products = [{
   image: '/images/Socks.png',
   name: 'Black and Grey Athletic Cotton Socks - 6 Pairs',
   ratings: 9,
   price: 1155

}, {
   image: '/images/Ball.png',
   name: 'Intermediate Size Basket ball',
   ratings: 5,
   price: 2500

},{
   image: '/images/Shirt.png',
   name: 'Adults Plain Cotton T-shirts - 2 Packs',
   ratings: 7,
   price: 1200
},{
   image: '/images/Toaster.png',
   name: '2 Slot Toaster - Black',
   ratings: 8,
   price: 1870
},{
   image:'/images/dinner plate.png',
   name: '6 Piece White Dinner Plate set',
   ratings: 5,
   price: 2067
},{
   image: '/images/oven.png',
   name: 'Carbon Steal Oven',
   ratings: 7.8,
   price: 5000
}, {
   image: 'images/hoodi.png',
   name: 'Plain Hooded Sweatshirt',
   ratings: 9.5,
   price: 2200
},{
   image: '/images/detergent.png',
   name: 'Liquid Detergent',
   ratings: 7,
   price: 1500
}];

export function getProduct(productName){

   let matchingProduct;
   
   products.forEach((product) => {
      if (product.name === productName){
         matchingProduct = product;
      };
   });
//  console.log(matchingProduct);
     return matchingProduct;
   
};

