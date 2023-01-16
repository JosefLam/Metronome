// metronome
console.log("Setting up metronome");
const btnDecreaseBPM = document.getElementById("btnDecreaseBPM");
const btnIncreaseBPM = document.getElementById("btnIncreaseBPM");
const bpmInput = document.getElementById("txtBPM");
const btnStartStop = document.getElementById("btnStartStop");
const MAX_BPM = 120
const MIN_BPM = 50
var running = false;
var bpm = 60;   //beats per minute

btnStartStop.addEventListener("click", function (e) {
    console.log("click");
    running = !running;
    btnStartStop.value = running ? "Stop" : "Start";


    if (running) {
        setSpeedAndStart();
    }
});

function setSpeedAndStart() {
    clearInterval(callback)
    var ms = 60000 / bpm;
    callback = setInterval(onTick, 1000);
}

function onTick() {
    console.log("Tick");
}

bpmInput.onchange = function (e) {
    bpm = parseInt(bpmInput.value);
    if (isNan(bpm)) {
        bpm = 50;
    }
    console.log(bpm);
}


btnDecreaseBPM.onclick = function (e) {
    bpm -= 5;
    console.log("Decrease BPM");
    updateBPM();
}

btnIncreaseBPM.onclick = function (e) {
    bpm += 5;
    console.log("Increase BPM");
    updateBPM();
}

function updateBPM() {
    if (bpm > MAX_BPM) {
        bpm = MAX_BPM;
    }
    if (bpm < MIN_BPM) {
        bpm = MIN_BPM;
    }

    bpmInput.value = bpm;
    if (running) {
        setSpeedAndStart();
    }
}