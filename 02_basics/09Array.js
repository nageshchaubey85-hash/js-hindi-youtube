// arrays

const myarr = [0,2,3,4,5]//resizable arr and mixed arr
console.log(myarr[0]);
//shallow copy-> same reference change in original array
//deep copy->properties do not share same reference

const myHeros = ["saktiman","hanuman"]
 const myarr2 = new Array(1,2,3,4)
 console.log(myarr2[1]);

//  Array methods

myarr.push(6);
myarr.push(7);
myarr.pop();

myarr.unshift(9);//starting add 9
myarr.shift()//remove starting element
console.log(myarr.includes(9));//false
console.log(myarr.indexOf(3));
console.log(myarr);

const newarr= myarr.join()

console.log(myarr);
console.log(newarr);//typeof ->string
console.log(typeof newarr)//join change to string datatype

// slice,splice

console.log("A ", myarr)
const myarr1= myarr.slice(1,3);// index (1 to 2) deleted (3->not included)
console.log(myarr1);
console.log("B ",myarr);

const myar2 = myarr.splice(1,3);// index (1 to 3) deleted
console.log("C",myarr);
// original array will be changed in splice method while not change in slice  method
console.log(myar2);
