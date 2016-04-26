var assert = require("assert");
var fruition = require("../fruition");

var shops =  {

  "woolingsworth": {
    "apples": 4,
    "bananas": 3,
    "oranges": 12
  },

  "chockers": {
    "bananas": 2,
    "apples": 5,
    "oranges": 4
  },

  "pickle pay": {
    "bananas": 4,
    "oranges": 7
  },

  "shopwrong": {
    "apples": 2,
    "bananas": 3
  },

  "kwakspar": {
    "oranges": 9,
    "apples": 4
  }
}

describe("The best of deals: Fruition", function(){

  it("should return the seller of the cheapest oranges", function(){

    assert.equal( fruition.cheapestSeller(shops), "chockers");
  });

  it("should return the prices and sellers of apples, order ascending by price", function(){

    var expectedAscendingPrice = [
      {
        "seller": "shopwrong",
        "applesPrices": 2
      },
      {
        "seller": "kwakspar",
        "applesPrices": 4
      },
      {
        "seller": "woolingsworth",
        "applesPrices": 4
      },
      {
        "seller": "chockers",
        "applesPrices": 5
      }
    ];

    assert.deepEqual( fruition.ascending(shops), "expectedAscendingPrice");
  });

  it("should return the prices and sellers of apples, order descending by price", function(){

    var expectedDescendingPrice = [
      {
        "seller": "chockers",
        "applesPrices": 5
      },
      {
        "seller": "woolingsworth",
        "applesPrices": 4
      },
      {
        "seller": "kwakspar",
        "applesPrices": 4
      },
      {
        "seller": "shopwrong",
        "applesPrices": 2
      }
    ];
    assert.deepEqual( fruition.descending(shops), "expectedDescendingPrice");
  });

  it("should return the cheapest fruit", function(){

    assert.equal( fruition.cheapestFruit(shops), "bananas, apples");
  });

  it("should return the seller of the fruit with the lowest price", function(){

    assert.equal( fruition.lowestPrice(shops), "shopwrong");
  });

  it("should return all the shops that sell oranges.", function(){

    var expectedShops = [
      {
      "shop": "woolingsworth"
      },
      {
      "shop": "chockers"
      },
      {
      "shop": "pickle pay"
      },
      {
      "shop": "kwakspar"
      }
    ];

    assert.deepEqual( fruition.sellOranges(shops), expectedShops);
  });

});
