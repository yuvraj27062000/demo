console.log("hello");

const userdata = {
    name:'yesh',
    class:12,
    color:'yellow',
    city:"indore"
}

localStorage.setItem("user",JSON.stringify(userdata));
const data = JSON.parse(localStorage.getItem('user'));
console.log(data.name);
