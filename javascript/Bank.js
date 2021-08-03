/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
class Bank{
    
//    var Account[];
    static nextNumber;
   
    constructor() {
        this._accounts = [];
    }
    
    addAccount(number){
           this._accounts.push(new Account(number));
        return this._accounts.length;
        
    }
    
    addSavingsAccount(interest, number){
         this._accounts.push(new SavingsAccount(interest, number));
        return this._accounts.length;
        
    }
    
    addCheckingAccount(overdraft, number){
          this._accounts.push(new CheckingAccount(overdraftLimit, number));
        return this._accounts.length;
        
    }
    
    closeAccount (number){
             var accountIndex = this._accounts.findIndex((acc) => acc.getNumber() == number);
        if (accountIndex != undefined) {
            this._accounts[accountIndex] = null;
        }
    }
    
    accountReport(){
              return this._accounts.filter(xx => xx instanceof Account).map(pp => pp.toString()).join("\n");  
    }
    
    endOfMonth() {
        console.log(this._accounts.map(acc => acc.endOfMonth()));
    }
     
}
