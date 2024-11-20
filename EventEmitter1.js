var events = require('events');
function Account(){
    this.balance = 0;
    events.EventEmitter.call(this);
    this.deposit = function(amount){
        this.balance = this.balance + amount;
        this.emit('balanceChanged');
    };

    this.withdraw = function(amount){
        this.balance = this.balance - amount;
        this.emit('balanceChanged');
    };    
}

Account.prototype.__proto__ = events.EventEmitter.prototype;

function displayBalance(){
    console.log('Account balance : $%d', this.balance);
    //console.log('Inside the display balance');
}
function checkOverdraw(){
    if(this.balance < 0){
        console.log('Account overdrawn!!!');
    }
}
function checkGoal(acc, goal){
    if (acc.balance > goal){
        console.log('goal reached !!!');
    }
}

var acc1 = new Account();
acc1.on("balanceChanged", displayBalance);
acc1.on("balanceChanged", checkOverdraw);
acc1.on("balanceChanged", function(){
    checkGoal(this, 1000);
});

acc1.deposit(220);
acc1.deposit(320);
acc1.deposit(600);

acc1.withdraw(1200);

