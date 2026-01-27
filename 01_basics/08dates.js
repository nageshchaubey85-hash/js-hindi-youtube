//Dates

 let myDate = new Date()
 console.log(myDate);
 console.log(myDate.toString());
 console.log(myDate.toDateString());
 console.log(myDate.toLocaleString());
 console.log(typeof myDate);//object

 let mycreatedDate = new Date(2026,0,27);//months start from 0
 console.log(mycreatedDate.toDateString());
  let createdDate = new Date(2026,0,27,5,3)
  console.log(mycreatedDate.toLocaleString())
  
  let createdate= new Date("01-14-2024")
  console.log(createdate.toLocaleString());

  let mytimestamp = Date.now()
//   console.log(mytimestamp);
//   console.log(createdate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());

console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
})



 

