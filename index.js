

// function init() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(setPosition)
//   }
//   else {
//     alert("We are sorry we could not get your location, please be sure your browse support geolocation");
//   }
// }

// function setPosition(position) {
//   const url = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat='+ position.coords.latitude+'&lon='+position.coords.longitude+'&units=metric&appid=34825e0c4223298977c3486a8f3e254c';
//   fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     updateWeather(data);
//     updateImage(data);
//   });
// }


// function updateWeather(data) {

// }

// function updateImage(data) {
//   document.body.style.background = "url('images/clear.jpg')";

//   if (data.weather[0].id >= 200 && data.weather[0].id <=232) {
//     document.body.style.backgroundImage = "url('images/storm.jpg')";
//   }
//   else if (data.weather[0].id >= 300 && data.weather[0].id <=321) {
//     document.body.style.backgroundImage = "url('images/raining.jpg')";
//   }
//   else if (data.weather[0].id >= 500 && data.weather[0].id <=531) {
//     document.body.style.backgroundImage = "url('images/rain.jpg')";
//   }
//   else if (data.weather[0].id >= 600 && data.weather[0].id <=622) {
//     document.body.style.backgroundImage = "url('images/snow.jpg')";
//   }
//   else if (data.weather[0].id == 800) {
//     document.body.style.backgroundImage = "url('images/clear.jpg')";
//   }
//   else if (upda.weather[0].id >= 801 && upda.weather[0].id <=804) {
//     document.body.style.backgroundImage = "url('images/clouds.jpg')";
//   }
// }


//   //Toggle function to change temperature from Celcius to Fahrenheit and vice versa
// // function toggleTemp() {
// //   let celcius = true;
// //   let


// //       Temp = (Temp-32)*(5/9);
// //       fTemp= false;
// //       $(".temp").text("Celcius");
// //     }
// //     else { // Temperature is currently in Celcius
// //       Temp = (Temp*(9/5))+32;
// //       fTemp= true;
// //       $('.temp').text("Fahrenheit");
// //     }
// //     $(".tempRead").text(Temp.toPrecision(4));
// //   }


//   // function weather(upda) {
//   //   Temp= upda.main.temp.toPrecision(4); // Fahrenheit is set by default

//   //   // Set background, standard image


//   //   // In here we substitue the text with all the information, starting on location
//   //   $('.text').html("<h4>Location: "+upda.name+"</h4>");
//   //   // Then we append the temperature with the button to switch between C and F
//   //   $('.text').append("<h5>Current temperature: <span class='tempRead'>"+upda.main.temp+"</span> in <button class='temp'> Fahrenheit</button></h5>");
//   //   // Attach the description of the weather
//   //   $(".text").append("<h4 class='description'>"+upda.weather[0].description+"</h4>");
//   //   $(".description").css("text-transform","capitalize");

//   //   // We activate the function toggleTemp that we created previously and assing this function to every time the user click on the button
//   //   $(".temp").click(toggleTemp);
//   //   $('.temp').css("background", "none");

//   // }

// document.addEventListener("DOMContentLoaded", init);





