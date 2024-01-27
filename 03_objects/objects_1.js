// singleton object creation method uses constructor Object.create




const sym = Symbol("Password")//this how we created a symbol ; symbol_name = Symbol(Number or string or undefined)

//object creation using object literals 

const account = {
    name: "Atharva Pandey",
    username:"akkieternals",
    [sym]:"atharva26",
    Active : false,
    Played_games : 23
}
/*
in above object (key:value) named account
all the keys are identified as string except for [sym]
if we ideally write sym instead of [sym] 
sym will be declared as string not symbol 
so if we want declared symbol as a key we use above method
*/
console.log(account.name);//method 1 to access value of object
console.log(account["name"]);//method 2
console.log(account[sym])//only way to access value whose key is symbol

//objects can be changed

account.Active=true

//console.log(account);

//we can also add new key:value in object
account.rank="silver"

// console.log(account);

//Object.freeze(account) /*this makes an object non-changeable so we cant add new key:value neither we can change any values*/

account.Greeting= function(){
    console.log(`Hello ${this.username}!! ,Welcome to the game`); 
    //this function access the current object we are using and ${variable} help use to print variable value 
}
console.log(account.Greeting())
