/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports.drive = function() {
console.log("The car moves forward");
};
module.exports.turn = function(degrees) {
console.log(`The car turns ${degrees}`);
};
module.exports.break = function() {
console.log("the car stops");
};

