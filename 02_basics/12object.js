const tinder = new Object()//singleton object return {}
console.log(tinder);
const tinderUser = {}
tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn= false

console.log(tinderUser);//return {} object->not singleton

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
             lastname:"choudhary",
    }
}
}
console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);