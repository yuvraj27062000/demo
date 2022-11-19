
let css = 'button:hover{background-color:blue ;}'
// let css = 'button:hover{background-color: red;}'
let body = document.querySelector('body');
let style = document.createElement('style');
style.append(css)
document.querySelector("head").append(style);


style.append(css)
console.log(style)
let h2 = document.querySelector("h2");

let button = document.createElement("button");

// button.style = "backgroundColor:blue"


button.textContent = "change It";

body.appendChild(button)

button.addEventListener("click",()=>{
    let css = `h2{background-color:yellow;}
            h2:hover{color:red;            
    `
    style.append(css);
    h2.innerText = "your work is done..."


})

console.log(button)