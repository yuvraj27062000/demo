// console.log("hello");

// let user1 = {
//     name:'yuvraj',
//     city:'Indore'
// };
// let user2 = {
//     name:'yash',
//     city:'Bhopal'
// };

// let printdata = function (){
//     // console.log(user2.name);
//     console.log("user data printed " + this.name +" "+ this.city);
// }

// printdata.apply(user1);
// const printlater = printdata.bind(user1);

// console.log(printlater);
// // printlater();


// let multiply = function(x,y){
//     console.log(x*y);
// }

// let myltiply = function (x){
//     return function (y){
//         console.log(x*y);
//     }
// }(2)(3)


// myltiply(2)(4);

// let multiplybytwo = multiply.bind(this,3,5);
// multiplybytwo(5);

// let fetchRes = fetch("https://jsonplaceholder.typicode.com/todos");
           
// fetchRes.then(res =>
//         res.json()).then(d => {
//         console.log(d)
//     })

// fetchRes()


// let add = ()=>{
//     let c = 7-9;
//     return ()=>{
//         console.log(c);
//     };
// }

// let p = add()
// p()


// function parent(){
//     let b ;
//     function print(x){
//         console.log("normal function");
//         x();
//         let a = 10;
//         function y(){
//             console.log("clouser "+ a,b);
            
//         }
//         y()
//     }
//     print(()=>{
//         console.log("callback function");
//     })
// }

// parent();


// this.a = "papa";
// console.log(this);

function acc(a,f,c,d)