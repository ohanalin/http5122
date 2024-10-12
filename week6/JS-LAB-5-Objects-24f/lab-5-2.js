//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
var myCustomer = {


    //2. Add the required properties to your object.
    lastName: "Lin",
    branchNumber: 1121,
    multipleAccounts : false,
    accountBalance: 500.25,
    interestRate:1.03,
    makeDeposit: function (number) {
        myCustomer.accountBalance = myCustomer.accountBalance + number;
        return ("Your current balance is " + myCustomer.accountBalance );
    },
    makeWithdrawal: function (money) {
       myCustomer.accountBalance = myCustomer.accountBalance- money;
       return("Your current balance is " + myCustomer.accountBalance);
    },
    addInterest:function () {
       
        
        if(myCustomer.multipleAccounts === true){
           var tempRate = this.interestRate+0.005;
           myCustomer.accountBalance = myCustomer.accountBalance*tempRate;
              return("Thank you, your current balance is now $" + myCustomer.accountBalance.toFixed(2));

        }else{
            myCustomer.accountBalance = myCustomer.accountBalance*myCustomer.interestRate;
            return("Thank you, your current balance is now $" + myCustomer.accountBalance.toFixed(2));
        }
    
    }
    
}

//3. Add your first method and test it. Remember, the methods will change the properties of the object.
console.log(myCustomer.makeDeposit(200));
console.log(myCustomer.makeWithdrawal(75));
console.log(myCustomer.addInterest());


//4. Add your second method and test it.
//5. Create the required output to complete steps 6-10 of the lab.
//6. Once everything is working, tackle the Stretch Goal!


