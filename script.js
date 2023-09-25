import { validateDate, validateEmail, validateName, validatePassword } from "./validations.js";

const input = document.querySelectorAll(".input");
const button = document.querySelector(".button");
const container = document.querySelector(".container");
const weatherDisplay = document.querySelector(".weather-display");
// const input1 = input[0]
// const input2 = input[1]
// const input3 = input[2]
// const input4 = input[3]

let latitude = 0; 
let longitude = 0; 

if ("geolocation" in navigator) {
  console.log('aqq')
  // Geolocation is available

  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log(position)
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      document.getElementsByClassName("map1")[0].src = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;z%3D14&amp&output=embed`
      setTimeout(function () {
        document.getElementsByClassName("map1")[0].style.filter = "blur(0)"
      }, 800)
      document.getElementsByClassName("map2")[0].href = `https://maps.google.com/maps(?q=${latitude},${longitude}&hl=es;z%3D14&amp&output=embed`
      button.addEventListener("click", (event) => {
        event.preventDefault(); 
          const firstNameValue = input[0].value;
          const emailValue = input[1].value;
          const passwordValue = input[2].value;
          const birthdayValue = input[3].value;
      
          const firstNameError = document.getElementById("firstNameError");
          const emailError = document.getElementById("emailError");
          const passwordError = document.getElementById("passwordError");
          const birthdayError = document.getElementById("birthdayError");
      
          firstNameError.textContent = "";
          emailError.textContent = "";
          passwordError.textContent = "";
          birthdayError.textContent = "";
      
          const firstNameValidation = validateName(firstNameValue);
          const emailValidation = validateEmail(emailValue);
          const passwordValidation = validatePassword(passwordValue);
          const birthdayValidation = validateDate(birthdayValue);
      
          if (firstNameValidation !== true) {
              firstNameError.textContent = firstNameValidation;
              input[0].style.border = '1px solid red';
          }
      
          if (emailValidation !== true) {
              emailError.textContent = emailValidation;
              input[1].style.border = '1px solid red';

          }
      
          if (passwordValidation !== true) {
              passwordError.textContent = passwordValidation;
              input[2].style.border = '1px solid red';

          }
      
          if (birthdayValidation !== true) {
              birthdayError.textContent = birthdayValidation;
              input[3].style.border = '1px solid red';

          }
      
          if (
              firstNameValidation === true &&
              emailValidation === true &&
              passwordValidation === true &&
              birthdayValidation === true
          ) {
   
      

            const apiKey = '1f8e49566cee5cc1e31369f230339bad';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

            fetch(apiUrl)
              .then((response) => response.json())
              .then((data) => {
                const temperature = data.main.temp;
                const weatherDescriptionsMapping = {
                  'clear sky': 'imgs/clearsky.jpg',
                  'few clouds': 'imgs/fewclouds.jpg',
                  'scattered clouds': 'imgs/scatteredclouds.jpg',
                  'broken clouds': 'imgs/brokenclouds.webp',
                  'shower rain': 'imgs/showerrain.jpg',
                  'rain': 'imgs/rain.jpg',
                  'thunderstorm': 'imgs/thunder.jpg',
                  'snow': 'imgs/snow.jpg',
                  'mist': 'imgs/misty.JPG',
                  'overcast clouds': 'imgs/overcastclouds.jpg',
                };

                const weatherDescription = data.weather[0].description;
                console.log(weatherDescription)

                const imgsource = weatherDescriptionsMapping[weatherDescription]
                

              
                const imgEl = document.getElementById('img-bg');
                imgEl.style.display = 'block' 
                imgEl.src = imgsource;




                weatherDisplay.innerHTML = `
                  <h2>Hi ${input1.value}, weather in Your Location</h2>
                  <p> ${temperature}°C</p>
                  <p>Condition: ${weatherDescription}</p>
                `;

                container.style.display = "none";

                console.log(data);
              })
              .catch((error) => {
                console.error("Error fetching weather data:", error);
              });
            }

      });
    },
    function (error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.error("User denied the request for geolocation.");
          break;
        case error.POSITION_UNAVAILABLE:
          console.error("Location information is unavailable.");
          break;
        case error.TIMEOUT:
          console.error("The request to get user location timed out.");
          break;
        case error.UNKNOWN_ERROR:
          console.error("An unknown error occurred.");
          break;
      }
    }, function(err){
      console.log(err)
    }, {enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0}
  );
} else {
  console.error("Geolocation is not available in this browser.");
}