/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global assert */

var arr1=[1,2,3,4,5];
var arr2=[3,4,5];
var arr3=[10,40,50,200];


/////////########################################################/////////////////
//                              testing the sum function
/////////########################################################/////////////////


describe("sum", function() {

  it("The Sum of the Array is 15", function() {
    assert.equal(sum(arr1), 15);
  });
});

describe("sum", function() {

  it("The Sum of the Array is 12 ", function() {
    assert.equal(sum(arr2), 12);
  });
});

describe("sum", function() {

  it("The Sum of the Array is 300 ", function() {
    assert.equal(sum(arr3), 300);
  });
});


/////////########################################################/////////////////
//                              testing the multiply function
/////////########################################################/////////////////
describe("multiply", function() {

  it("The Product of the Array is 120", function() {
    assert.equal(multiply(arr1), 120);
  });
});

describe("multiply", function() {

  it("The Product of the Array is 60 ", function() {
    assert.equal(multiply(arr2), 60);
  });
});

describe("multiply", function() {

  it("The Product of the Array is 300 ", function() {
    assert.equal(multiply(arr3), 4000000);
  });
});



/////////########################################################/////////////////
//                              testing the reverse function
/////////########################################################/////////////////
var st1="Hello";
var st2="Nope";
var st3="Ghidiom";

describe("reverse", function() {

  it("reverse of String st1 is olleH", function() {
    assert.equal(reverse(st1), "olleH");
  });
});
describe("reverse", function() {

  it("reverse of String st2 is epoN", function() {
    assert.equal(reverse(st2), "epoN");
  });
});

describe("reverse", function() {

  it("reverse of String st3 is moidihG", function() {
    assert.equal(reverse(st3), "moidihG");
  });
});


/////////########################################################/////////////////
//                              testing the filterLongWords function
/////////########################################################/////////////////

var array1=["Natu", "Berie", "Gebrish", "Ghidiom", "Wedi Nega"];
var x=5;

describe("Filtered Long Words", function() {

  it("filtered long words are: [ 'Gebrish', 'Ghidiom', 'Wedi Nega' ]", function() {
    assert.deepEqual(filterLongWords(array1, x), [ "Gebrish", "Ghidiom", "Wedi Nega" ]);
  });
});


var array2=["Natu", "Berie", "Gebrish", "Ghidiom", "Wedi Nega"];
var xx=7;

describe("Filtered Long Words", function() {

  it("filtered long words are: ['Wedi Nega']", function() {
    assert.deepEqual(filterLongWords(array2, xx), ["Wedi Nega"]);
  });
});


var array3=["Barentu Nana","Asseb", "Keren", "Asmara", "Tessenney", "Shambiko"];
var xxx=8;

describe("Filtered Long Words", function() {

  it("filtered long words are: ['Barentu Nana', 'Tessenney'] ", function() {
    assert.deepEqual(filterLongWords(array3, xxx), ["Barentu Nana", "Tessenney"]);
  });
});