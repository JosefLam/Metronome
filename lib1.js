// metronome
console.log("Setting up metronome");
const btnDecreaseBPM = document.getElementById("btnDecreaseBPM");
const btnIncreaseBPM = document.getElementById("btnIncreaseBPM");
const bpmInput = document.getElementById("txtBPM");

var bpm = 60;   //beats per minute


bpmInput.onchange = function (e) {
    bpm = parseInt(bpmInput.value);
    if (isNan(bpm)) {
        bpm = 50;
    }
    console.log(bpm);
}


btnDecreaseBPM.onclick = function (e) {
    bp -= 5;
    console.log("Decrease BPM");
}