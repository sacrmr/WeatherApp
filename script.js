let h3 = document.querySelector("h3");
let now = new Date();
let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];
h3.innerHTML = `${day}, ${month} ${date}, ${year} <br /> Current Time: ${hours}:${minutes}`;

function search(city) {
  let apiKey = "ca5b7f2d8535cadcd8f5264fda720408";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemp);
}

function showCity(event) {
  event.preventDefault();

  let city = document.querySelector("#search-input").value;
  search(city);
}

let form = document.querySelector("#search-bar");
form.addEventListener("submit", showCity);
search("Vienna");

function showTemp(response) {
  console.log(response);
  let tempCurrent = document.querySelector("#degrees");
  tempCurrent.innerHTML = Math.round(response.data.main.temp);
  let city = document.querySelector("h1");
  city.innerHTML = response.data.name;
  document.querySelector("#condition").innerHTML =
    response.data.weather[0].main;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function convertFahrenheit(event) {
  event.preventDefault();
  let degrees = document.querySelector("#degrees");
  let F = Math.round(26 * 1.8 + 32);
  degrees.innerHTML = `${F} °F`;
}
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", convertFahrenheit);

function convertCelsius(event) {
  event.preventDefault();
  let degrees = document.querySelector("#celcius");
  degrees.innerHTML = 26;
}
let celsius = document.querySelector("#Celsius");
celsius.addEventListener("click", convertCelsius);
