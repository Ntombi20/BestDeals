var fs = require('fs');

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


exports.price = function(avoList){
  var avocados = avoList;
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


exports.cheapest = function(priceList){
  var deal = priceList;
  var avocados = deal[0].pricePerAvo;
  var cheapest = "";

  for (var priceList in deal) {
    if (deal[priceList].pricePerAvo < avocados) {
      cheapest = deal[priceList].pricePerAvo;
    }
  };

  return cheapest;
};


exports.expensive = function(listOfPricesPerAvo){
  var expensive = 0;

  listOfPricesPerAvo.forEach(function(item){
    if (item.pricePerAvo > expensive) {
      expensive = item.pricePerAvo;
    }
  });

  return expensive;
};


exports.average =function(avoList){
  var average = "";

  // for (var i = 0; i < avocados.length; i++) {
  //
  //   console.log(
  //
  // }
    // = Number(deals.price);


};
