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

describe("The best of deals: Avo", function(){

  it("should return an array of the quantity and the price", function(){

    assert.deepEqual( avocado.qtyPrice(), expectedAvo);
  });

  it("should return take an array and calculate the Price Per Avo for each deal", function(){

    assert.equal( avocado.price(expectedAvo), "3, 3.5, 3.3, 2.9")
  });


});
