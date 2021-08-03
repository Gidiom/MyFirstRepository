/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class CheckingAccount extends account{
    constructor(overdraft, number){
        super(number);
        this.overdraft=overdraft;
    }
    
        setLimit(overdraft){
        this.overdraft=overdraft;
        
    }
    
    getLimit(){
        return this.overdraft;
        
    }
    
    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > (this._balance + this.overdraft)) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }
    
        endOfMonth() {
        if (this.getBalance() < 0) {
            return `Warning, low balance CheckingAccount ${this.getNumber()}: balance: ${this.getBalance()} overdraft limit: ${this.overdraft}`;
        }
        return "";
    }
    
    
      toString() {
        return "Checking Account " + this.getNumber() + ": balance " + this.getBalance() + ": overdraft limit " + this.overdraft;
    }
    
}
