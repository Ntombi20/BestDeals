var assert = require("assert");
var avocado = require("../avocados");
var expectedAvo = [
  {
    "quantity": 1,
    "price": 3
  },
  {
    "quantity": 2,
    "price": 7
  },
  {
    "quantity": 3,
    "price": 10
  },
  {
    "quantity": 5,
    "price": 14.50
  }
];

var expectedPrice = [
  {
    "Deal": "avocado",
    "pricePerAvo": 3.00
  },
  {
    "Deal": "avocado",
    "pricePerAvo": 3.50
  },
  {
    "Deal": "avocado",
    "pricePerAvo": 3.33
  },
  {
    "Deal": "avocado",
    "pricePerAvo": 2.9
  }
];

describe("The best of deals: Avo", function(){

  it("should return an array of the quantity and the price", function(){

    assert.deepEqual( avocado.qtyPrice(), expectedAvo);
  });

  it("should return take an array and calculate the Price Per Avo for each deal", function(){

    assert.deepEqual( avocado.price(expectedAvo), expectedPrice);
  });

  it("should return the cheapest deal", function(){

    assert.equal( avocado.cheapest(expectedPrice), "2.90");
  });

  it("should return the most expensive deal", function(){

    assert.equal( avocado.expensive(expectedPrice), "3.50");
  });

  it("should return the average price across all the deals", function(){

    assert.equal( avocado.average(expectedAvo), "3.14");
  });

});
