window.onload = function() {
    displayHistory();
}

function getLocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success, error, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        });
    } else {
        alert("Geolocation is not supported by your browser.");
    }
}

function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    document.getElementById("lat").innerText = lat;
    document.getElementById("lon").innerText = lon;

    let history = JSON.parse(localStorage.getItem("locationHistory")) || [];
    history.unshift({lat: lat, lon: lon, time: new Date().toLocaleString()});
    if(history.length > 5) history = history.slice(0,5);
    localStorage.setItem("locationHistory", JSON.stringify(history));

    displayHistory();
}

function error(err) {
    switch(err.code){
        case err.PERMISSION_DENIED:
            alert("Permission denied. Please allow location access.");
            break;
        case err.POSITION_UNAVAILABLE:
            alert("Location unavailable.");
            break;
        case err.TIMEOUT:
            alert("Request timed out. Try again.");
            break;
        default:
            alert("An unknown error occurred.");
    }
}

function displayHistory() {
    const historyList = document.getElementById("history");
    historyList.innerHTML = "";
    let history = JSON.parse(localStorage.getItem("locationHistory")) || [];
    history.forEach(loc => {
        const li = document.createElement("li");
        li.innerText = `Lat: ${loc.lat}, Lon: ${loc.lon} (at ${loc.time})`;
        historyList.appendChild(li);
    });
}