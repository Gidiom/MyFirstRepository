/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question('What is your name? ', name => {
    readline.question(`Welcome ${name}. What is your age? `, age => {
        if (parseInt(age) < 16) {
            console.log('You’re not allowed to drive in Iowa');
        } else {
            console.log('You’re allowed to get a drivers license in Iowa');
        }
        readline.close();
    });
});
