function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let day = date.getDay();
    return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description")
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
}

let apiKey = "5ef560c2739fa62b5e22bb83083603a3";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Broomfield&appid=${apiKey}&units=metric`; 

axios.get(apiUrl).then(displayTemperature);