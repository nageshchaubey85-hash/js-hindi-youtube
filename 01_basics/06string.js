
const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");old method

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

console.log(gameName[0]);//h
console.log(gameName.__proto__);//{}


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)//4 not included
console.log(newString);

const anotherString = gameName.slice(-8, 4)//for negative value reverse answer give
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());//starting space and end space remove

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'))

console.log(gameName.split('-'));