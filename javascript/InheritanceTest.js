/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/////////########################################################/////////////////
//                              testing the sum function
/////////########################################################/////////////////


describe("filter1", function() {

  it("Result, after filtering the banned words", function() {
    assert.equal("Hello this is not a home, not nice home.".filter("not"), "Hello this is a home, nice home.");
  });
  
});

//

describe("filter2", function() {

  it("Result, after filtering the banned words", function() {
    assert.equal("Hello this is not a home, not nice home.".filter("nice"), "Hello this is not a home, not home.");
  });
});


describe("filter3", function() {

  it("Result, after filtering the banned words", function() {
    assert.equal("I am bad boy.".filter("bad"), "I am boy.");
  });
});




describe("BubbleSort1", function() {

  it("Result, after applying BubbleSort", function() {
    assert.equal([12,-4,2,0,10,1].BubbleSort().toString(), [-4,0,1,2,10,12].toString());
  });
});

describe("BubbleSort2", function() {

  it("Result, after applying BubbleSort", function() {
    assert.equal([14,7,0,4].BubbleSort().toString(), [0,4,7,14].toString());
  });
});

describe("BubbleSort3", function() {

  it("Result, after applying BubbleSort", function() {
    assert.equal([120,100,140,160,80].BubbleSort().toString(), [80,100,120,140,160].toString());
  });
});

