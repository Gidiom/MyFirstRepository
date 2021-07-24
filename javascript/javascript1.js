/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
        
 function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

 function myArrayFunctionTest(arr1, arr2) {
    
  if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length && arr1.every((val, index) => val === arr2[index])) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected ";
  }
}



        
        //1. returning the Largest of two numbers 
        function maxOfTwo(x,y){
            if(x>y){
                return x;
            }else{
                return y;
            }
        }       
console.log("Expected output of max(32,23) is 32  " + myFunctionTest(32, maxOfTwo(32, 23)));    

 //2. returning the Largest of three numbers 
        function maxOfThree(x,y,z){
            if(x>y && x>z){
                return x;
            }else if(y>z && y>x)
            {
                return y;
            }
            else{
                return z;
            }
        }
console.log("Expected output of max(43,54,65) is 65  " + myFunctionTest(65, maxOfThree(43,54,65)));         

//3. Checking if the input is a vowel 
        function isVowel(x){
            var y = x.toLowerCase();
            if(y.length===1 && (y==="a" || y==="e" || y==="i" || y==="o" || y==="u")){
                return true;
            }else{
                return false;
            }
        }
console.log("Expected True  "+myFunctionTest(true, isVowel("i")));

//4.1 summing all the numbers in an array of numbers
        function sum(arr){
            let sum=0;
            for(let i=0; i<arr.length; i++){
                sum=sum+arr[i];
            }
            return sum;

        }
console.log("Expected output of sum[1,2,3,4] is 10  " + myFunctionTest(10, sum([1,2,3,4])));         
//4.2 multiplying all the numbers in an array of numbers
        function multiply(arr){
            let multiple=1;
            for(let j=0; j<arr.length;j++){
                multiple=multiple*arr[j];
            }
            return multiple;
        }
console.log("Expected output of multiple of [1,2,3,4] is 24  " + myFunctionTest(24, multiply([1,2,3,4]))); 

//5. reversing a String 
        function reverse(str){
            let result="";
            for(let i=str.length; i>=0; i--){
                result = result+str.charAt(i);
            }
            return result;
        }
console.log("Expected output of reverse of 'Hello World' is 'dlroW olleH'  " + myFunctionTest("dlroW olleH", reverse("Hello World")));

//6. returning the length of the longest word from an array
        function findLongestWord(arr){
            let longest=arr[0].length;
            for(let i=1; i<arr.length; i++){
                if(longest<arr[i].length){
                    longest = arr[i].length;
                }
            }
            return longest;
        }
console.log("Expected output of longest word's size from the give array is 10  " + myFunctionTest(10, findLongestWord(["well", "come", "to", "the", "world", "of", "javascript" ])));


//7. taking an array of words and an integer i and returning the array of words that are longer than i
        function filterLongWords(arr, i){
            let newArr=[];
            for(let j=0; j<arr.length; j++){
                if(arr[j].length>i){
                    newArr.push(arr[j]);
                }
            }
            return newArr;
        }
        
console.log("Expected output of filtered long words of the given array is 'three, four, five, seven' " + myArrayFunctionTest([ "three", "four", "five", "seven" ], filterLongWords(["one", "two", "three", "four", "five", "six", "seven"], 3)));


//8. function modifing(){
    
const a = [1,3,5,3,3]; 

//a) multiply each element by 10; 
const b = a.map(function(elem, i, array) {
  return elem *10;
});
console.log("After multipling [1,3,5,3,3] by 10 is  " +b);
//document.writeln(b.toString() + "<br/>");



//b) return array with all elements equal to 3; 
const c = a.filter(function(elem, i, array){
  return elem === 3;});
  
console.log("After filtering 3s from [1,3,5,3,3] is  " +c);
//document.writeln(c.toString() + "<br/>");



//c) return the product of all elements;
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});
console.log("The product of [1,3,5,3,3] is  " +d);
//document.writeln(d.toString() + "<br/>");




