// // console.log( "  ")

// function divide (url){
//     return new Promise(async (resolve, reject)=>{
//         try {
//             const responsedata =  await fetch(url);
//             let realdata =   responsedata.json();
//             console.log("promise resolve");
//             resolve(realdata);
//         }
//         catch(error){
//             reject(error);
//         }
//     })
// }

// const url = "https://jsonplaceholder.typicode.com/todos/5";
// divide(url)
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((error)=>{
//         console.log(error.message);
//     })






// // function makeGetRequest(url) {
// //     return new Promise(async (resolve, reject) => {
// //         try {
// //             const response = await fetch(url, {
// //                 "method": "Get",
// //                 "headers": {
// //                     'Content-Type': 'application/json'
// //                 },
// //             })
// //             const jsonResponse = await response.json()
// //             resolve(jsonResponse)
// //         }
// //         catch (error) {
// //             reject(error)
// //         }
// //     })
// // }


// // function getData() {
// //     const url = "https://jsonplaceholder.typicode.com/todos"
// //     makeGetRequest(url).then((data) => {
// //         console.log("DATA=======>", data)
// //     }).catch((error) => {
// //         console.log("ERROR====>", error.message)
// //     })
// // }

// // getData()







// let x =20
// function  data(){
//     // let x = 20;
//     function closoure(){
//         console.log(x);
//     }
//     closoure();
// }

// data();

const arr = [1,2,3,4,5,6];

// let data = arr.map((val)=> val*2 );

// console.log(arr, data);


// let data1 = arr.filter((val)=> val%2==0 );
// console.log(arr,data1);


let data2 = arr.reduce((acc,curr)=> acc+=curr ,0);
console.log(arr,data2);




// let url = "https://jsonplaceholder.typicode.com/users"

// fetchdata(url);

// async function fetchdata(url){
//     const urldata =  await fetch(url);
//     const data = await urldata.json();
//     console.log( data);

//     let tab = ` <th>id</th>
//     <th>name</th>
//     <th>username</th>
//     <th>email</th>
//     <th>address</th>
//   </tr>`
//     // Loop to access all rows 
//     for (let r of data) {
//         // console.log(r.id);
//         tab += `<tr> 
//         <td>${r.id} </td>
//         <td>${r.name}</td>
//         <td>${r.username}</td> 
//         <td>${r.email}</td>  
//         <td> <span> ${r.address.suite }</span>,<span>${r.address.street }</span>,<span style= color:red;>${r.address.city }</span>,<span>${r.address.zipcode }</span></td>    
//         </tr>`;
//         }   
//     document.getElementById("maintable").innerHTML = tab;

// }
 
    