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
  var priceList = ""

    for (var avoList in avocados) {

        console.log(avocados[avoList].[0]);

    }
};
