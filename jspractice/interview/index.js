let x = 20
function func(y) {
    y()
    function closure() {
        console.log("closure", x);
    }
    closure()
}

func(call)

function call() {
    console.log("closure", x);
}



function pro(x) {
    return new Promise((resolve, reject) => {
        if (x % 2 == 0) {
            resolve("successful")
        }
        else {
            reject("faild")
        }
    })
}

pro(20)
    .then((res) => {
        console.log(res)
    })
    .catch((res) => {
        console.log(res)
    })



let h1 = document.querySelector('h1')
const body = document.querySelector("body")
let botton = document.createElement("button");
botton.textContent = "click Me"
body.appendChild(botton)
botton.addEventListener("click", () => {
    h1.textContent = "hello"
})



console.log(botton);


function click() {
    document.getElementsByTagName('h1').innerTEXT = "hello"
    // console.log(h1)

}


function countBy(initial) {

    // return the output using return keyword
    // do not console.log it
    // var num ;
    function callback(num) {
        initial += num
        return initial;
    }


    return callback
}



const count = countBy(4);
console.log(count(2));
console.log(count(2));
console.log(count(-2));
console.log(count);





// Sign up form

// there has to be

// 1. name field

// 2. phone number which only contains number and that too only 10 digits

// 3. email id that mandatorily contains @ and .

// 4. password field which accepts alphanumeric characters and should be of minimum 8 length

// 5. there should be a confirm password field which checks that the entries in the password field is same as in this field or not

// 6. there should be a radio button to select the gender

// 7. there should be a drop down menu to select the nationality indian and others

// 9. there should be a submit button

// 10. There should be a reset button also


let name = document.getElementById('name').value;
let mobile = document.getElementById('number').value;
let email = document.getElementById('email').value;
let pswd = document.getElementById('password').value;
let repswd = document.getElementById('repassword').value;


// console.log(name);
if (Number(mobile).length != 10) {
    alert("mobile no. should be 10 digit");
}

if (!email.includes("@") && email.includes(".")) {
    alert("mobile no. should be 10 digit");
}

if (!number(pswd).length == 8) {
    alert("password should length 8 or more")

}
if (!number(pswd) == number(repswd)) {
    alert(" re intered password wrong ")
}

console.log()



function sum(...b) {
    if (b.length > 1) {
        return b.reduce((acc, curr) => acc += curr, 0)
    }
    else {
        return (c) => {
            return b[0] + c;
        }
    }
}

console.log(sum(5)(4));
console.log(sum(5, 4));
function runFunc() {
    console.log("1" + 1);
    console.log("A" - 1);
    console.log(2 + "-2" + "2"); 2 - 22
    console.log("Hello" - "World" + 78);
    console.log("Hello" + "78");
}

runFunc()
    (function () {
        var z = y = 3;
    })();
console.log("z defined? " + (typeof z !== 'undefined'));
console.log("y defined? " + (typeof y !== 'undefined'));

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    setTimeout(function () {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}



