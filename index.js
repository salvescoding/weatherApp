let celcius = true;
let currentTemperature = 0;
const results = document.getElementById("results");


function init() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setPosition)
  }
  else {
    alert("We are sorry we could not get your location, please be sure your browse support geolocation");
  }
}

function setPosition(position) {
  const url = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat='+ position.coords.latitude+'&lon='+position.coords.longitude+'&units=metric&appid=34825e0c4223298977c3486a8f3e254c';
  fetch(url)
  .then(response => response.json())
  .then((data) => {
    updateWeather(data);
    updateImage(data);
    console.log(data);
  });
}

  //Toggle function to change temperature from Celcius to Fahrenheit and vice versa
function toggleTemp() {

  if(celcius) {
    currentTemperature = (currentTemperature*(9/5))+32;
    celcius = false;
    document.querySelector(".temp").innerText = "Fahrenheit";
  }
  else {
    currentTemperature = (currentTemperature-32)*(5/9);
    celcius = true;
    document.querySelector(".temp").innerText = "Celcius";
  }
  document.getElementById("temperature").innerText = currentTemperature.toPrecision(3);
}


function updateWeather(data) {
  currentTemperature = data.main.temp.toPrecision(3);

  results.insertAdjacentHTML("afterbegin", `<h3> Your location: ${data.name} </h3>`);
  results.insertAdjacentHTML("beforeend", `<p> ${data.weather[0].description}</p>`);
  results.insertAdjacentHTML("beforeend", `<p> Current temperature: <span id="temperature">${data.main.temp} </span> in <button class="temp">Celcius</button></p>`);
  results.insertAdjacentHTML("beforeend", `<p> Humidity: ${data.main.humidity}%</p>`);
  results.insertAdjacentHTML("beforeend", `<p> Max Temp: ${data.main.temp_max}, Min Temp: ${data.main.temp_min} </p>`);

  document.querySelector(".temp").addEventListener("click", toggleTemp);
}

function updateImage(data) {
  document.body.style.background = "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url('images/clear.jpg')";
  let id = data.weather[0].id;

  if (id >= 200 && id <=232) {
    document.body.style.background = "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url('images/storm.jpg')";
  }
  else if (id >= 300 && id <=321) {
    document.body.style.background= "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url('images/raining.jpg')";
  }
  else if (id >= 500 && id <=531) {
    document.body.style.backgroud = "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url('images/rain.jpg')";
  }
  else if (id >= 600 && id <=622) {
    document.body.style.background = "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url('images/snow.jpg')";
  }
  else if (id == 800) {
    document.body.style.background = "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url('images/clear.jpg')";
  }
  else if (id >= 801 && id <=804) {
    document.body.style.background = "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url('images/clouds.jpg')";
  }
}




document.addEventListener("DOMContentLoaded", init);





