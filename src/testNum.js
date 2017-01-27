var Numbers = require('./numberWord.js');
var expect = require("chai").expect;

describe("Test for the Numbers Module", function() {
  describe("Number To Words Format", function(){
    it("numberFormat(5652)", function(){
      expect(Numbers.numberFormat(5652)).to.deep.equal("five thousand six hundred fifty two ");
    });
    it("numberFormat(1200)", function(){
      expect(Numbers.numberFormat(1200)).to.deep.equal("one thousand two hundred ");
    });
    it("numberFormat(15)", function(){
      expect(Numbers.numberFormat(15)).to.deep.equal("fifteen ");
    });
	it("numberFormat(158)", function(){
      expect(Numbers.numberFormat(158)).to.deep.equal("one hundred fifty eight ");
    });
	it("numberFormat(4951)", function(){
      expect(Numbers.numberFormat(4951)).to.deep.equal("four thousand nine hundred fifty one ");
    });
	it("numberFormat(250)", function(){
      expect(Numbers.numberFormat(250)).to.deep.equal("two hundred fifty ");
    });
	it("numberFormat(5002)", function(){
      expect(Numbers.numberFormat(5002)).to.deep.equal("five thousand two ");
    });
	it("numberFormat(9015)", function(){
      expect(Numbers.numberFormat(9015)).to.deep.equal("nine thousand fifteen ");
    });
	it("numberFormat(19015)", function(){
      expect(Numbers.numberFormat(19015)).to.deep.equal("overflow");
    })
  });
});
