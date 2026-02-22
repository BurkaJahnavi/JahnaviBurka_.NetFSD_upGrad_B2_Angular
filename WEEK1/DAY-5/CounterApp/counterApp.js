let count = 0;

function updateDisplay() {
    document.getElementById("counter").innerText = count;
}

function incrementCounter(step) {
    count = count + step;
    updateDisplay();
}

function resetCounter() {
    count = 0;
    updateDisplay();
}

document.getElementById("incBtn").addEventListener("click", function () {
    incrementCounter(1);
});

document.getElementById("resetBtn").addEventListener("click", function () {
    resetCounter();
});