function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3.0) {
        return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
    } else {
        return "N/A";
    }
}

function displayWindChill() {
    const temperature = parseFloat(document.getElementById("temperature").textContent);
    const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);
    let windChillValue = calculateWindChill(temperature, windSpeed);

    if (typeof windChillValue === "number") {
        document.getElementById("windChill").textContent = windChillValue.toFixed(2) + "°F";
    } else {
        document.getElementById("windChill").textContent = windChillValue;
    }
}

document.addEventListener("DOMContentLoaded", displayWindChill);
