
// "https://jsonplaceholder.typicode.com/posts"

const url = "https://jsonplaceholder.typicode.com/todos";

// fetch(url)
//     .then((res)=>res.json())
//     .then((data)=>{
//         data.map((value)=>{
//             const ele = document.createElement("h1");
//             ele.innerText = value.title;
//             document.getElementById("container").appendChild(ele);
//         })  
//     })

// fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       let authors = [data];

//       authors.map(function(data) {

//       });
//     })

fetch(url)
    .then(async(res)=>await res.json())
    .then((data) =>{
        ShowResponce(data);
    })
        


function ShowResponce(data){
    // console.log(typeof data)
    data.map((val)=>{
        console.log(val)
        td =``
        td = `
            <td>${val.id}</td>
            <td>${val.title}</td>
            <td>${val.completed}</td>
        `
        const tr = document.createElement('tr');
        tr.innerHTML = td;
        document.getElementById("table").appendChild(tr);
    })

}
