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
  console.log(sellerOrange);
 return sellerOrange;

};

exports.cheapestSeller = function(cheapestOranges){

  var cheapestSeller = "";
  var price = cheapestOranges[0].price;

  for (var key in cheapestOranges) {
    if (cheapestOranges[key].price < price) {
      price = cheapestOranges[key].price;
      cheapestSeller = cheapestOranges[key].shop;
    }
  }
  console.log(cheapestSeller);
  return cheapestSeller;

};




//
//
// exports.ascending = function(){
//
// };
//
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
