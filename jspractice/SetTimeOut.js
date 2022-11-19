// settimeout  function

// function x(){
//     setTimeout(function (){
//         console.log("settimeout call back function ", "a");
//         setTimeout(function (){
//             console.log("settimeout call back function ", "e");
//             setTimeout(function (){
//                 console.log("settimeout call back function ", "i");
//                 setTimeout(function (){
//                     console.log("settimeout call back function ", "o");
//                     setTimeout(function (){
//                         console.log("settimeout call back function ", "u");
                    
//                     }, 1000);
//                 }, 2000);
//             }, 3000);
//         }, 4000);
//     }, 5000);

        
// }

// x();


const arr = ['a','e','i','o','u']
function x(){
    for(let i=1;5>=0;i--){
            setTimeout(function (){
                console.log("settimeout call back function ", i);
            }, 1000*i);
    }
}

x()
