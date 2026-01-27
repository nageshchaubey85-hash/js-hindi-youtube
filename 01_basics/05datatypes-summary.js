// Primitive 

// 7 types :String, Number, Boolean, Null, Undefined,Symbol, BigInt
 const score = 100;
 const scorevalue = 100.3;

 const isLoggedIn = false;
 const outsidetemp = null
 let userEmailId;//undefined

 const id=Symbol('445')
 const anotherId = Symbol('445')

 console.log(id === anotherId)

 const bigNumber = 32132134646497979n


// Reference (Non primitive)

//Array, objects, Functions

const heros = ["nagesh","nag","pranshu"]
let myobj={
    name: "hitesh",
    age: 22,
}

const myfunction = function(){
    console.log("hellow world");
}
 //typeofnull=object
 // non-primitive type return typeof=object
//  function always return typeof=object

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive ), Heap (Non primitive)

let myYoutubename="hiteshchoudharydotcom"

let anothername =myYoutubename
anothername="chaaurcode"

console.log(anothername);
console.log(myYoutubename);
let userone={
    email:"user@google.com",
    upi:"user@ybl",
}
let userTwo=userone

userTwo.email="nagesh@gmail"

console.log(userone.email);

console.log(userTwo.email);


