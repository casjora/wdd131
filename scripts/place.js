document.addEventListener('DOMContentLoaded', function() {
    // Set temperature and wind speed values that meet the criteria
    const temperature = 26; 
    const windSpeed = 13;    
    
    // Update the displayed values in the HTML
    document.getElementById('temperature').textContent = temperature + ' °C';
    document.getElementById('windspeed').textContent = windSpeed + ' km/h';

    const windChillDisplay = document.getElementById('windchill');

    function calculateWindChill(temp, speed) {
        // Using metric formula
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
    }

    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillDisplay.textContent = windChill.toFixed(2) + ' °C';
    } else {
        windChillDisplay.textContent = 'N/A';
    }
});