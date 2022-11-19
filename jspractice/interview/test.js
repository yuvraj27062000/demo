const stop = setInterval(() => {
    console.log("code executed");
    
}, 2000);
setTimeout(() => {
    console.log("  executed");
    clearInterval(stop);
}, 5000);