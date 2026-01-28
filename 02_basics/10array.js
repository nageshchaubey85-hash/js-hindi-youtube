//  Array part 2
const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]
// marvel_heroes.push(dc_heroes)//push work in existing array

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][0])//superman
// console.log(marvel_heroes[3])


//concate return in new array

const allheroes = marvel_heroes.concat(dc_heroes)
console.log(allheroes)


const all_new_heroes = [...marvel_heroes,...dc_heroes]
console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// 

console.log(Array.isArray("Hitesh"))//check->false not array
console.log(Array.from("Hitesh"))//make string
console.log(Array.from({name:"Hitesh"}))//not convert string give key or value to be convert in to string
 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3))//make arrays



