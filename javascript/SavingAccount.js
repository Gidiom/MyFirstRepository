/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
class SavingsAccount extends account{
    constructor(interest, number){
        super(number);
        this._interest=interest;
    }
    setInterest(interest){
        this._interest=interest;
        
    }
    
    getInterest(){
        return this._interest;
        
    }
    
    addInterest(){
        
        this.deposit(this.getBalance() * this.getInterest() / 100);
        
    }
    
      endOfMonth() {
        this.addInterest();
        return `Interest added SavingsAccount ${this.getNumber()}: balance: ${this.getBalance()} interest: ${this._intreset}`;
    }
    
    toString() {
        return "Savings Account " + this.getNumber() + ": balance " + this.getBalance() + ": intreset " + this.getInterest();
    }
}