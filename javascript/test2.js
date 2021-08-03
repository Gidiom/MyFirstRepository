(function () {
    
    // Testing Account 
    describe("Account", function () {
        beforeEach(() => {
            account = new Account(3445);
        });

        describe("getNumber", function () {
            it("This Returns accounts number", function () {
                assert.equal(account.getNumber(), 3445);
            });
        });

        describe("getBalance", function () {
            it("Returns accounts balance", function () {
                assert.equal(account.getBalance(), 0);
            });
        });

        describe("deposit", function () {
            describe("When the given amount is more than zero", function () {
                it("Increment account balance by given amount", function () {
                    account.deposit(100)
                    assert.equal(account.getBalance(), 100);
                });
            });

            describe("When the given amount is less than zero", function () {
                it("Throws an error",
                    function () {
                        assert.throws(() => { account.deposit(-12) }, Error, "Deposit amount has to be greater than zero");
                    });
            });
        });


        describe("withdraw", function () {
            describe("When the given amount is more than the balance", function () {
                it("Throws Error with Withdraw amount has to be greater than zero", function () {
                    assert.throws(() => { account.withdraw(-1) }, Error, "Withdraw amount has to be greater than zero");
                });
            });

            describe("When the given amount is less than or equal to 0", function () {
                it("Throws Error with Insufficient funds", function () {
                    assert.throws(() => { account.withdraw(200) }, Error, "Insufficient funds");
                });
            });

            describe("When the given amount is valid", function () {
                it("Decrease account balance by given amount", function () {
                    account.deposit(120);
                    account.withdraw(100);
                    assert.equal(account.getBalance(), 20);
                });
            });
        });

        describe("endOfMonth", function () {
            it("Prints details of account", function () {
                assert.equal(account.endOfMonth(), '');
            });
        });

        describe("toString", function () {
            it("Prints account details", function () {
                assert.equal(account.toString(), `Account ${account.getNumber()}: balance ${account.getBalance()}`);
            });
        });
    });
    
    })();
    
