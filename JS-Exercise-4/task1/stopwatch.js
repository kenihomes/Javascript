
function dateT1(){
    document.getElementById("dateT1").innerHTML = ` DATE ${moment().format('DD MM YYYY')}`
}
dateT1()

function timeT1(){
    document.getElementById("timeT1").innerHTML = ` TIME ${moment().format('h:mm:ss a')}`
}

setInterval("timeT1()", 1000);


let milisec = 0;
let hr = 0;
let min = 0;
let sec = 0;
let stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        setInterval("timerCycle()", 10);
    }
}

function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function resumTimer() {
    if (stoptime == true) {
          stoptime = false;
          setInterval("timerCycle()", 10);
      }
  }
  document.getElementById("stop_watch_timer").innerHTML = hr + ':' + min + ':' + sec + ':' + milisec;

function timerCycle() {
    if (stoptime == false) {
    
    milisec = parseInt(milisec);
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    milisec = milisec+1
    // sec = sec + 1;
    
    if (milisec == 100){
        sec = sec + 1;
        milisec = 0;
    }

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

}
document.getElementById("stop_watch_timer").innerHTML = hr + ':' + min + ':' + sec + ':' + milisec;
}

function resetTimer() {
    milisec = 0;
    hr = 0;
    min = 0;
    sec = 0;
    stopTimer()
}

