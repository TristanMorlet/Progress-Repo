const APIkey = '461152178dac5cebf9a0ca5a5386aeb2';
let form = document.querySelector('.weather-form');
console.log(form);
console.log(form.city);
let weatherInfo = document.querySelector('.weather-info');
let error = document.querySelector('.error'); 
let cityInput = document.querySelector('input[name=city]');

form.addEventListener('submit', getWeather);

async function getWeather(e){

    console.log('getWeather called');
    e.preventDefault();

    const city = cityInput.value.trim();
    cityInput.value = '';
    console.log(`City: ${city}`);

    if (city) { // catches empty as well, since empty string = false in JS
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`City not found: ${city} - Please try again`);
        }
        
        const data = await response.json();
        console.log(data);
        // display weather

        
        error.textContent = '';
        weatherInfo.innerHTML = `<h3>The weather in ${data.name}, ${data.sys.country} is:</h3>
    <div class="field">
        <span class="label">Temperature:</span>
        <span class="value">${data.main.temp}°C</span>
    </div>
    <div class="field">
        <span class="label">Conditions:</span>
        <span class="value">${data.weather[0].description}</span>
    </div>
    <div class="field">
        <span class="label">Humidity:</span>
        <span class="value">${data.main.humidity}%</span>
    </div>
    <div class="field">
        <span class="label">Wind Speed:</span>
        <span class="value">${data.wind.speed} m/s</span>
    </div>`;

        } catch (error) {
            showError(error.message);
        }

    } else {
        showError('Please enter a valid city name.');
    }
}

function showError(message) {
    weatherInfo.textContent = '';
    error.textContent = message;
}
