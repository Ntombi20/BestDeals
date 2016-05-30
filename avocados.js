var fs = require('fs');

// convert the string into an array (split out the quantity and the price);
exports.qtyPrice = function(){

  var avocados = fs.readFileSync('./files/avo.txt', 'utf8' );

  avocados = avocados.replace(/["']/g, "")
  var avoString = avocados.split(", ");
  var avoList = [];

  avoString.forEach(function(avo){
    var item = avo.split(" for ");
    var quantity = Number(item[0]);

    var number = item[1]
      .split("R")

    var price = Number(number[1]);

    avoList.push({
      quantity : quantity,
      price : price
    });

  });

  return avoList;
};

// take an array as an input and calculate the Price Per Avo for each deal.
exports.price = function(quantityAndPrices){
  var avocados = quantityAndPrices;
  var priceList = [];

    avocados.forEach(function(avo){

      var prices =  avo.price / avo.quantity;
      var price = Number(prices);
          priceList.push({
            Deal: "avocado",
            pricePerAvo: price.toFixed(2)
          });
    });

    return priceList;
};

// find the cheapest deal
exports.cheapest = function(listOfPricesPerAvo){
  var avocados = listOfPricesPerAvo[0].pricePerAvo;
  var cheapest = "";

  listOfPricesPerAvo.forEach(function(item){
    if (item.pricePerAvo < avocados) {
      cheapest = item.pricePerAvo;
    }
  });

  return cheapest;
};

// find the most expensive deal;
exports.expensive = function(listOfPricesPerAvo){
  var expensive = 0;

  listOfPricesPerAvo.forEach(function(item){
    if (item.pricePerAvo > expensive) {
      expensive = item.pricePerAvo;
    }
  });

  return expensive;
};

// find the average price across all the deals.
exports.average =function(quantityAndPrices){
  var average = "";
  var qty = 0;
  var prices = 0;

    quantityAndPrices.forEach(function(qtyPrice){

      qty += qtyPrice.quantity;
    })

    quantityAndPrices.forEach(function(qtyPrice){

      prices += qtyPrice.price;
    })

      average = prices / qty;

  return average.toFixed(2);
};
