const url = "https://fakestoreapi.com/products/"


fetch(url)
    .then(async(res)=> await res.json())
    .then((res)=>{
        // [res].map((value)=>{
        //     console.log(value);
        // });
        ShowResponce(res);
    })

    var css = 'table img:hover{  box-shadow: 2px 1px 7px black; }';
    // var style = document.createElement('style');
    let title = document.querySelector("style");
    title.append(css)
    console.log(title)

function ShowResponce(data){
    data.map((value)=>{
        console.log( value);
        let img = document.createElement('img')
        img.src = value.image;
        let tdata =  document.createElement('td');
        tdata.appendChild(img);
        let td =``
        td +=   `   
            <td>${value.id}</td>
            <td>${value.price}</td>
            <td>${value.category}</td>
        `
        const  tr = document.createElement('tr');
        tr.innerHTML = td;
        tr.appendChild(tdata); 
        document.getElementById('table').appendChild(tr);
    })
}



// const imageUrl = "https://i.picsum.photos/id/566/200/300.jpg?hmac=gDpaVMLNupk7AufUDLFHttohsJ9-C17P7L-QKsVgUQU";

// (async () => {
//   const response = await fetch(imageUrl)
//   const imageBlob = await response.blob()
//   const reader = new FileReader();
//   reader.readAsDataURL(imageBlob);
//   reader.onloadend = () => {
//     const base64data = reader.result;
//     console.log(base64data);
//   }
// })()

// const src = "https://s3-ap-southeast-1.amazonaws.com/tksproduction/bmtimages/pY3BnhPQYpTxasKfx.jpeg";

// let show =  document.createElement("img");
// show.src = src;
// let div = document.getElementsByClassName("contain")
// div[0].appendChild(show);
// console.log(div[0])
