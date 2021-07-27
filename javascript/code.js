///* 
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */


// var sum;
// sum = [1,2,3,4].reduce(
//	function (container, val) {
//		return container + val;},sum);
//
//document.writeln("The sum result is: " +sum); // 



//
//var multiply= 1;
// multiply = [1,2,3,4].reduce(
//	function (container, val) {
//		return container * val;},multiply);
//
//document.writeln("The product result is: " +multiply); // 

////Part 1: Functional Programming
////4.1 summing all the numbers in an array of numbers

function sum(arr){
    return arr.reduce((x,y)=>x+y,0);
};

////4.2 multiplying all the numbers in an array of numbers
function multiply(arr){
    return arr.reduce((x,y)=>x*y,1);
};

////5. reversing a String 

function reverse(str1){
    return str1.split("").reduce((x, y)=> (y + x));
    
    };

//7. taking an array of words and an integer i and returning the array of words that are longer than i
        function filterLongWords(arr, i){
  return arr.filter(x=>x.length>i);
        };