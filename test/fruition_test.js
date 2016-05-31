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
};

var expectedShopsForOranges = [
  { shop: 'woolingsworth', price: 12 },
  { shop: 'chockers', price: 4 },
  { shop: 'pickle pay', price: 7 },
  { shop: 'kwakspar', price: 9 } ];

var expectedShopsForApples =[
  { shop: 'woolingsworth', price: 4 },
  { shop: 'chockers', price: 5 },
  { shop: 'shopwrong', price: 2 },
  { shop: 'kwakspar', price: 4 } ]

describe("The best of deals: Fruition", function(){

  it("should return seller that sells oranges and the price", function(){

    assert.deepEqual( fruition.sellerOrange(shops), expectedShopsForOranges);
  });

  it("should return the seller of the cheapest oranges", function(){

    assert.equal( fruition.cheapestSeller(expectedShopsForOranges), "chockers");
  });


  it("should return seller that sells apples and the price", function(){

    assert.deepEqual( fruition.sellerApples(shops), expectedShopsForApples);
  });

  it("should return the prices and sellers of apples, order ascending by price", function(){

    var expectedAscendingPrice = [
      {
        "shop": "shopwrong",
        "price": 2
      },
      {
        "shop": "woolingsworth",
        "price": 4
      },
      {
        "shop": "kwakspar",
        "price": 4
      },
      {
        "shop": "chockers",
        "price": 5
      }
    ];

    assert.deepEqual( fruition.ascending(expectedShopsForApples), expectedAscendingPrice);
  });

  it("should return the prices and sellers of apples, order descending by price", function(){

    var expectedDescendingPrice = [
      {
        "shop": "chockers",
        "price": 5
      },
      {
        "shop": "woolingsworth",
        "price": 4
      },
      {
        "shop": "kwakspar",
        "price": 4
      },
      {
        "shop": "shopwrong",
        "price": 2
      }
    ];
    assert.deepEqual( fruition.descending(expectedShopsForApples), expectedDescendingPrice);
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
