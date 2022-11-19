let startBtn = document.querySelector('#startBtnId')
let stopBtn = document.querySelector('#stopBtnId')
let resetBtn = document.querySelector('#resetBtnId')
let displayTime = document.querySelector('#timeId')


// console.log(start)


let isPaused = false
let counter = 0

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function convertMsToTime(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    
    hours = hours % 24;

    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
        seconds,
    )}`;
}

startBtn.addEventListener('click', () => {
    document.getElementById("startBtnId").disabled = true ;
 document.getElementById("stopBtnId").disabled = false ;
 document.getElementById("resetBtnId").disabled = false ;
     setInterval(() => {
        
        if (isPaused == false) {
            counter = counter + 1000

        }
        displayTime.innerText = convertMsToTime(counter)
    }, 1000)
})

stopBtn.addEventListener('click', () => {
    if (isPaused) {
        isPaused = false
        stopBtn.innerText = "pause"

    }
    else {
        isPaused = true
        stopBtn.innerText = "Continue"
    }
})

resetBtn.addEventListener('click', () => {
    counter = 1
    document.getElementById("startBtnId").disabled = false ;
    document.getElementById("stopBtnId").disabled = true ;
    document.getElementById("resetBtnId").disabled =  true ;
})

// counter = 1
displayTime.innerText = convertMsToTime(counter)
//DONE


    

