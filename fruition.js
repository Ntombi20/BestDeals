// find the seller that sells oranges;
exports.sellerOrange = function(shops){

  var sellerOrange = [];

  for (var shop in shops) {
    var seller = shop;
     if (shops[shop].hasOwnProperty("oranges")) {
      sellerOrange.push({
          shop: seller,
          price: shops[shop].oranges
        })
    }
  };
 return sellerOrange;

};

//find the seller of the cheapest oranges;
exports.cheapestSeller = function(cheapestOranges){

  var cheapestSeller = "";
  var price = cheapestOranges[0].price;
  for (var key in cheapestOranges) {
    if (cheapestOranges[key].price < price) {
      price = cheapestOranges[key].price;
      cheapestSeller = cheapestOranges[key].shop;
    }
  }

  return cheapestSeller;

};

// find the seller that sells apples;
exports.sellerApples =function(shops){
  var sellerApples = [];

  for (var shop in shops) {
    var seller = shop;
     if (shops[shop].hasOwnProperty("apples")) {
      sellerApples.push({
          shop: seller,
          price: shops[shop].apples
        })
    }
  };

 return sellerApples;
};

//should return the prices and sellers of apples, order ascending by price;
exports.ascending = function(apples){

  apples.sort(function(a,b){
  return a.price - b.price
  });
  
  return apples
};

// exports.descending = function(){
//
// };
//
// exports.cheapestFruit = function(){
//
// };
//
// exports.lowestPrice = function(){
//
// };
//
// exports.sellOranges = function(){
//
// };


    // return the prices and sellers of apples, order ascending by price;
    // return the prices and sellers of apples, order descending by price;
    // return the cheapest fruit;
    // return the seller of the fruit with the lowest price;
    // return all the shops that sell oranges.
