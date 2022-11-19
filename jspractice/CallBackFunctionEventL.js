//  what is Call Back functions 

//  


// console.log("yuvraj")
// setTimeout(function xyz(){
//     let x = 23;
//     console.log("hii"+x)
// },4000);


// console.log("hello");



// const arr = [{id:1, name:"yuvraj",age:20,salary:25000},
//             {id:2, name:"Bahubali",age:24,salary:10000},
//             {id:3, name:"kattappa",age:27,salary:20000}
// ]
 


// let data = arr.filter(value => value.age<25).map(value => ({...value, salary:value.salary+10000})).reduce((acc,cur) => acc=acc+cur.salary, 0);
// console.log(data)


// const arr = [4,2,45,32,55,3,55,67,3];

// console.log(arr.toString());

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

// At position 2, remove 2 items: 
const p = fruits.splice(1,3 ,"yes","bhai");

console.log(fruits);
