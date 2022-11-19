// /*
// const arr = [2,3,58,83,74,73,69,99,4,5,6]

// console.log(arr)
// const find = arr.filter((N)=>{
//     if(N>1){
//         let bool = false

//         for(let i=2;i<=Math.sqrt(N);i++){
//             if(N%i==0){
//                bool = true 
//             }
            
//         }
//         if(bool==false){
//             return N
//         }
//     }
    
// })
// console.log(find);


// const arr = [1,2,3,85,8,9,7,55,4,77,88,22,4,5,4,66,9,8,5,74,58,854,5]

// let mapdata = arr.map((N)=>{
//     // if(N>1){
//         let bool = false

//         for(let i=2;i<=Math.sqrt(N);i++){
//             if(N%i==0 && N!=1){
//                bool = true 
//             }
            
//         }
//         if(bool==false){
//             return N +" is prime"
//         }
//         else{
//             return N +" is not prime"
//         }
//     // }
// })
// console.log(mapdata)


// const arr = [1,3,2,6,7,5,7,8]

// let data = arr.find((f)=>{
//     if(f==44){
//         return f
//     }
// })
// console.log(data)

// const fruits = ["Banana", "Orange", "Apple"];
// fruits[fruits.length] = "Lemon";
// fruits.push("kivi")
// fruits.unshift('kivi')
// fruits.shift()
// fruits.reverse()
// console.log(fruits)


// const fruits1 = ["Banana", "Orange", "Apple"];

// const fruits2 = {"Banana":1,
//                  "Orange":2,
//                   "Apple":3
//                 };

// console.log(Array.isArray(fruits1))
// console.log(Array.isArray(fruits2))
// console.log(typeof(fruits1))
// console.log(typeof(fruits2))



// const fruitsf= ["Banana", "Orange", "Apple", "Mango"];
// const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
 

// function myfruits(){
//     let text = "";
//     fruitsf.forEach(fruits);    
//     function fruits(value){
//         text +=value+ ", ";
//     }
//     document.getElementById('demo').innerHTML=text;
// }

// console.log(myfruits());



// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);

// function myFunction(total, value, index, array) {
//     console.log(index,  total, value, array);
//   return total + value;
// }

// console.log(sum);



// // let date = new Date();
// // console.log(date.());


// let arr = ['my', 'name', 'is','yuvraj ', 'singh', 'chouhna'];
// for(let x of arr){

//     console.log(x +" ");
// }
 

// let n = 5;
// for (i = 1; i <= n; i++){
//     var temp = "";
//     for (j = 1; j <= n; j++){
//         temp=temp+" "+j;
//      }
//      console.log(temp);
// }



// // console.log(arr.join(" "));


// // var array = ["1 -",2,3,4,5,6,7,8,9,10]
// // var brray = ["one","two","three","four","five","six","seven","eight","nine","ten"]


// // for( i = 0 ; i < array.length ; i++){
// //  console.log(array[i], brray[i])
// // }
// */

// // console.log("A",a);
// // var a = 10;
// // add()
// // function add(){
// //     console.log("add");
// // }const arr = [1,3,2,6,7,5,7,8]

// // let count=0;
// // const  s = "my name is yuvraj".split('') ;
// // let n=0 ;
// // console.log(s);
// // let data = s.find((f)=>{
// //     // console.log(f);
// //     n++;
// //     if(f==' '){
// //         count++;  
// //     }
// //     if(s.indexOf(f) == s.length){
// //         console.log("hii",count)
// //         return count;
// //     }
// //     return if(f ==' '){count++};
// // })
// // console.log(data)

// // const string = 'my name is danish';

// // Option 1
// // string.split('');
// // if(string[2]==' ') {
// //     console.log("find");
// // }

// // Array.from(string);

// // console.log(string[1]);
 



 
// //  function  a(){
// //   var b= 3;
// //     console.log("yuvraj singh chouhan",x);
// //     c()
// //     function  c(){
// //         var b= 3;
// //           console.log("yuvraj singh chouhan",x);
      
// //        }
// //  }
  
// // var x = 3;
// // console.log(b);
// // a();


// //  console.log(x);
// //  invock();
// //  console.log(x);




// // function  a(){
// //     let i =0;
// //     for(let i=1;i<=5;i++){
// //         // console.log("yuvraj ",i);
// //     setTimeout(function  c(){
// //             console.log("yuvraj singh chouhan",i);
        
// //          }, i * 1000)
// //     }
// //     // console.log("yuvraj ",i);

// // }

// // a()
 
// //  let str = "newton School".split("o").reverse().join(",");
// // for(let i=str.length;i>=0;i--){
//     // console.log(str);
// // }

 
// // let i=10;
// // do{
// //     console.log(i);
// //     i++;

// // }while(i<1);



// // var table = document.getElementById("tbl");
// var c=1; 
// var sum = 0;

// function insertItem() {
//     var name = document.getElementById("item-name-input").value;
//     var price = document.getElementById("item-price-input").value;
//     console.log(price);
//     if(name!=0 && price!=0){
//       var tr = document.createElement("tr");
//       var td1 = document.createElement("td");
//       td1.innerHTML = c;
//       tr.appendChild(td1);
//       document.getElementById("tbl").appendChild(tr);
//       var td2 = document.createElement("td");
//       td2.innerHTML = name;
//       td2.setAttribute("data-ns-test","item-name");
//       tr.appendChild(td2);
//       document.getElementById("tbl").appendChild(tr);
//       var td3 = document.createElement("td");
//       td3.innerHTML = price;
//       td3.setAttribute("data-ns-test","item-price");
//       tr.appendChild(td3);
//       document.getElementById("tbl").appendChild(tr);
//     // console.log(price);
//       c++;
    
 
//     sum = sum+Number(price);
//     document.getElementById("total").innerHTML = sum;
//     }

// }

// const arr = [{id:1, name:"yuvraj",age:20,salary:25000},
//             {id:2, name:"Bahubali",age:24,salary:10000},
//             {id:3, name:"kattappa",age:27,salary:20000}
// ]
 


// let data = arr.filter(value => value.age<25).map(value => ({...value, salary:value.salary+10000}))
// console.log(data)






// const applyFilter = (data, filter) => data.filter(obj =>
//     Object.entries(filter).every(([prop, find]) => find.includes(obj[prop]))
// );

// // demo
// var users = [{name: 'John',email: 'johnson@mail.com',age: 25,address: 'USA'},{name: 'Tom',email: 'tom@mail.com',age: 35,address: 'England'},{name: 'Mark',email: 'mark@mail.com',age: 28,address: 'England'}];
// var filter = {name: ['Mark'] };

// var filter = {address: ['England'], name: ['Mark'] };

// console.log(applyFilter(users, filter));

// console.log(Object.entries(filter));


















// const mapval = arr.map(value,val => val+1000);
// console.log(mapval);

// const data = arr.filter((val)=>{
//     if(val>3){
//         return val*2;
//     }
// })
// console.log(data);

// const mapval = arr.map(value => value*2);
// console.log(mapval);


// const data = arr.filter((arr[age], val1=> val>25 ){
//         return val*2;
//     }
// })



// const foreachval = arr.forEach(value => value*2);
// console.log(foreachval);
// console.log(arr);


// const arr = [2,3,4,3,6,5];

// let sum = arr.reduce((value)=>{
//     return value;
// })
// console.log(sum);
// console.log( [2,3,4,3,6,5].reduce((a, b) => a + b, 0)  )

//  filter function

// const arr = [{id:1, name:"yuvraj",age:20,salary:25000},
//             {id:2, name:"Bahubali",age:24,salary:10000},
//             {id:3, name:"kattappa",age:27,salary:20000}
// ]
 


// let data = arr.filter(value => value.age<25).map(value => ({...value, salary:value.salary+10000})).reduce((acc,cur) => acc=acc+cur.salary, 0);
// console.log(data)

//  reduce function




// const arr = [2,3,4,3,6,5];

// let sum =0;

// for(let i=0; i<arr.length; i++){
//     sum-=arr[i];
// }

// console.log(sum);
// const value = arr.reduce((acc,cur) => acc=acc+cur, 0);

// // 0 having acc = 0;

// console.log(value);


// const arr1 = [{id:1, name:"yuvraj",age:20,salary:25000},
//             {id:2, name:"Bahubali",age:24,salary:10000},
//             {id:3, name:"kattappa",age:27,salary:20000}
// ]
 


// let data1 = arr1.filter(value => value.age<25).map(value => ({...value, salary:value.salary+10000}))//.reduce((acc,cur) => acc=acc+cur.salary, 0);
// console.log(data1)











// let a = [1,2,3,4,5,6,7]

// let p = a.slice(0,1);
// console.log(a.slice(-1));
// console.log(a);
// let t = a.splice(1,5, "yuvraj ",21);
// console.log(a,t);



// let arr = [1,2,3,4,5,6,7]


// let b = function a(y){
//     return y
// }
// console.log(b(function c(){
//     console.log("yuvraj");
// }))

// let val = arr.reduce((a=> a*2))
// console.log(val)

// let arr = [1,2,3, 4,5,6,7] 
// arr.sort(function(a,b) {return (b-a)})

// console.log(arr)



// console.log(arr.subtring(-3))

// let st = "yuvraj";

// // console.log(arr)
// console.log(st.substr(2,2))


// const arr = [1,2,5,4,5,6]

// console.log(arr.filter((n)=> n%2==0).reduce((acc,cur)=>acc+=cur))

// console.log(arr);

// const p = arr.find((a)=>{
// return a>5
// })

// console.log(p , arr);

// let map = new Map([
//     [1,"yuvraj"],
//     [2, 12],
//     [3, 101],
//     [4, "hindi"]
// ])

// map[0] =        "yuvraj";
// map[1] =        12;
// map[2] =        101;
// map[3] =        "hindi";
 

// map[1] = 21;
// console.log(map);
// for(let i=0;i<;i++){
//     console.log(map);
// }

// const arr = [54,21,33,6,77,8,332,4];
		// // int n = arr.length;

		// console.log( arr.filter((value)=>value%2!=0).reduce((acc,curr)=> acc+=curr));
        // // console.log(sum);

// arr.sort((a,b)=> b-a)
// console.log(arr);
// 
// function area(a,b,...c){
//     let c = a*b;
//     // console.log(c);
//     return c;
// }
// console.log(area(11,12,34,2,4,3,2,2,4,"yuvraj")

 
// const employees = [
//     {id:1, name:"John", age:23, salary:24000, dept:"HR"},
//     {id:2, name:"John", age:30, salary:20000, dept:"IT"},
//     {id:3, name:"John", age:25, salary:22000, dept:"Sales"},
//     {id:4, name:"John", age:22, salary:25000, dept:"IT"},
//     {id:5, name:"John", age:24, salary:27000, dept:"IT"},
//     {id:6, name:"John", age:22, salary:28000, dept:"HR"},
// ]

// Given employees data, raise the salary of employees belong to IT dept 
// and aged less than 25 to 40000. Calculate the total salary amount of those employees

// const data = employees.filter((value)=> value.age<25 && value.dept=="IT" ).map((value)=> ({...value, salary: 40000})).reduce((acc,cur) => acc=acc+cur.salary, 0);
// console.log(data);


/* ----------- Objects       ----------- */

// let obj = {
// 	id : 23,
// 	name : "yuvraj",
// 	age : 21
// };
// console.log(obj);
// obj.salary = 343434;
// obj['add']= 'indore';
// console.log(obj.id);

// let ob = new Object({id:32})
// console.log(ob)
// ob.name = "yesh";
// console.log(ob)

// function Employees(age,name){
// 	{
// 		this.age = age,
// 		this.name = name
// 	}
// }

// let emp = new Employees(23,'bolu');
// console.log(emp);


// function sum(n1, n2)
// {
//          // Your code here
//         let first = n1;
//         let second = n2;
//         let total = 0;
//         while(first > 0 && second > 0){
//             remd1 = first % 10;
//             remd2 = second % 10;
//             total += (remd1 * remd2);
//             console.log("reminder1 => ",remd1);
//             first = Math.floor(first / 10);
//             second = Math.floor(second / 10);
//         }
//         return total
// }
// console.log(sum(35, 6798))

// console.log(Math.floor(6798/10))

//  const arr = [4,3,2,4,5,3,6,5,4,8,2]

// for(let value of arr){
// 	console.log(value);
// }

// console.log(new Set(arr))

// const m = new Map()

// m.set(1 , "kivi");
// m.set(2 , "orange");
// m.set(3 , "pinapal");
// m.set(4 , "apple");

// console.log(m)

// console.log(m.values())

// function prime(value){
// 	for(let i = 2;i <=Math.sqrt(value) ; i++){
// 		if(value % i == 0){
// 			return false
// 		}
// 	}
// 	return true
// }
// const arr = [4,5,7,6,4,44,55,67,88,555,5,4,3,23,4,6,54,67,887]

// // arr.forEach((value)=>console.log(value));
// let temp ="";
// arr.forEach(iterate)

// function iterate(value){
// 	console.log(value+" is prime "+prime(value));
// }

// console.log(temp);


// let value = 4;
// let count =0;

// for(let i = 2;i <=Math.sqrt(value) ; i++){
// 	if(value % i == 0){
// 		console.log(value + " not prime");
// 		count++;
// 		break;
// 	}
// }
// if(count==0){
// 	console.log( value +"prime");
// }


// function struct(a,...b){
// 	console.log(a,b);
// 	return b;
// }

// let arr = struct(1,2,3,4,5,6);

// const arr = [6,5,4,3,2,1]
// const ff = [1,2,3,4,5,6]

// const merg = {...ff,...arr}
// console.log(merg)

// const jo = [...arr,...ff]
// console.log(jo)

// const data = {
// 	firstname :"john",
// 	add : "inndore",
// 	phone : 424553454353
// }

// // console.log(...dict)
// const jo = [...arr,...ff,data]
// console.log(jo)
// const first = {
// 	brand: 'Ford',
// 	model: 'Mustang',
// 	color: 'red'
//   }
  
//   const sec = {
// 	type: 'car',
// 	year: 2021, 
// 	color: 'yellow'
//   }
// var http = require('http');
// var fs = require('fs');

//   getText("main.txt");

//   async function getText(file) {
// 	// let x = await fetch(file);
// 	let y = await fs.readFile(file);
// 	console.log(y);
//   }



//   console.log({...sec,...first,},type='bolt' )
//   console.log(jo)




// const arr = [{id:1, name:"yuvraj",age:20,salary:25000},
//             {id:2, name:"Bahubali",age:24,salary:10000},
//             {id:3, name:"kattappa",age:27,salary:20000}
// ]
// const a = [1,2,3,4,5,6,7,8,9,10]

// let sum = 0;

// for(let i=0; i<a.length; i++){
// 	sum = sum + a[i]
// }
// console.log(sum);

// d =  [2,]

// let p = a.filter((curr)=> 	curr%2==0 )
// console.log(p)

// // console.log(arr[0].id)

// function x (){
// 	var p = 20
// 	// console.log(p);
// }
// x()

// console.log(p)

// class  demo {

// 	constructor(){
// 		this.name  = "yuvraj"
// 		this.age = 20
// 	}
// 	static get(){
// 		return console.log(this.name)
// 	}
// }
//  demo  = new demo()

// console.log(demo.get())