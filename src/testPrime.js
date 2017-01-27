var Prime = require('./prime.js');
var expect = require("chai").expect;


describe("Test for the prime Module", function() {
  describe("Prime sieve Tester", function() {
    it("primeSieve(9) ", function() {
      expect(Prime.primeSieve(9)).to.deep.equal([0, 0, 1, 1, 0, 1, 0, 1, 0, 0]);


    });
    it("primeSieve(10) ", function() {
      expect(Prime.primeSieve(10)).to.deep.equal([0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0]);


    });
    it("primeSieve(20) ", function() {
      expect(Prime.primeSieve(20)).to.deep.equal([0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0]);


    });
    it("primeSieve(50) ", function() {
      expect(Prime.primeSieve(50)).to.deep.equal([0,
        0,
        1,
        1,
        0,
        1,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0
      ]);


    });

  });

  describe("nth Prime number Finder", function() {
    it("checks if  primeSieve function is used", function() {
      var str = Prime.nthPrime.toString();
      var result = str.match(/module.exports.primeSieve/g);
      expect(result[0]).to.equal("module.exports.primeSieve");
    });
    it("nthPrime(3,300) ", function() {
      expect(Prime.nthPrime(3, 300)).to.equal(5);

    });
    it("nthPrime(4,300) ", function() {
      expect(Prime.nthPrime(4, 300)).to.equal(7);

    });

    it("nthPrime(5,300) ", function() {
      expect(Prime.nthPrime(5, 300)).to.equal(11);

    });
    it("nthPrime(6,300) ", function() {
      expect(Prime.nthPrime(6, 300)).to.equal(13);

    });
    it("nthPrime(7,300) ", function() {
      expect(Prime.nthPrime(7, 300)).to.equal(17);

    });
    it("nthPrime(50,300) ", function() {
      expect(Prime.nthPrime(50, 300)).to.equal(229);

    });


  });


  describe("Summation of primes", function() {

    it("checks if  primeSieve function is used", function() {

      var str = Prime.sumOfPrime.toString();

      var result = str.match(/module.exports.primeSieve/g);

      expect(result[0]).to.equal("module.exports.primeSieve");

    });

    it("sumOfPrime(9,300) ", function() {
      expect(Prime.sumOfPrime(9, 300)).to.equal(17);
    });

    it("sumOfPrime(20,300) ", function() {
      expect(Prime.sumOfPrime(20, 300)).to.equal(77);
    });

    it("sumOfPrime(40,300) ", function() {

      expect(Prime.sumOfPrime(40, 300)).to.equal(197);
    });

    it("sumOfPrime(60,300) ", function() {

      expect(Prime.sumOfPrime(60, 300)).to.equal(440);
    });

    it("sumOfPrime(90,300) ", function() {

      expect(Prime.sumOfPrime(90, 300)).to.equal(963);
    });

    it("sumOfPrime(120,300) ", function() {

      expect(Prime.sumOfPrime(120, 300)).to.equal(1593);
    });
    it("sumOfPrime(150,300) ", function() {

      expect(Prime.sumOfPrime(150, 300)).to.equal(2276);
    });
  });


});
