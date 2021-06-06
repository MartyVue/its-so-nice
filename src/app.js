function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
}

function displayForecast() {
    let forecastElement = document.querySelector("#forecast");
    
    let forecastHTML = `<div class="row">`;
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    days.forEach(function(day) {
    forecastHTML = 
        forecastHTML + `
            <div class="col-2">
              <div class="forecast-day">${day}</div>
              <img src="http://openweathermap.org/img/wn/01n@2x.png" 
              alt=""
              width="55"
            />
              <div class="temperature">
                <span class="temperature-max">
                  58°</span>/
                  <span class="tempurate-min">37°
                    </span>
                  </div>
            </div>
        `;
    }); 

        forecastHTML = forecastHTML + `</div>`;
    forecastElement.innerHTML = forecastHTML;
}

function displayTemperature(response) {
    console.log("response.data", response.data);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");


    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    iconElement.setAttribute(
        "src", 
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
    iconElement.setAttribute("alt", response.data.weather[0].description);
}

function search(city) {
    let apiKey = "5ef560c2739fa62b5e22bb83083603a3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 
    axios.get(apiUrl).then(displayTemperature);

}

function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    console.log("value", cityInputElement);
    search(cityInputElement.value);
}

search("Atlanta");

displayForecast();

let form = document.querySelector("#search-form");
console.log("form?", form)
form.addEventListener("submit", handleSubmit);

var css = document.querySelector("h3")
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("gradient")

function setGradient(){
    body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";
}

color1.addEventListener("input", setGradient())
color2.addEventListener("input", setGradient())

// 255 251 128
// 253 129 167