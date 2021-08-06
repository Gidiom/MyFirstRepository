/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

var sum = 0;

function getNumber() {
    readline.question('Enter numbers, write stop to get Sum of numbers you enter: ', num => {
        if (num.trim() === "stop") {
            console.log(`Sum is: ${sum}`)
            readline.close();
        } else {
            sum += parseInt(num);
            getNumber(); // recursion
        }
    });
}

getNumber();
