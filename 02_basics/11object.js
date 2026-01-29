// singleton
//object.create -> bad me discuss


//object literals
const mysym = Symbol("key1");

const jsuser = {
    name: "hitesh",
    mysym:"mykey1",
    [mysym]:"mykey1",
    fullname:"hitesh chodhary",
    age:18,
    location:"jaipur",
    email:"hitesh@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["monday","saturday"],
}

console.log(jsuser.email)   // Old method to accces
console.log(jsuser["email"]);  // Good method to access
console.log(jsuser["fullname"]);
console.log(jsuser.mysym);
console.log(typeof jsuser.mysym);
console.log(typeof jsuser[mysym]);



jsuser.email = "hitesh@chatgpt.com"
// Object.freeze(jsuser)//freeze at this not change the comntent of jsuser
jsuser.email = "hitesh@microsoft.com"
console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello JS user");
}
jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(jsuser.greeting);//just refrence are passes
console.log(jsuser.greeting());//() making function
console.log(jsuser.greetingTwo());



 


