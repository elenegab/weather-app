// const input1 = document.querySelector(".input");
// const button = document.querySelector(".button");
// const container = document.querySelector(".container");



// const weatherDisplay = document.querySelector(".weather-display");
// // const weather = document.querySelector(".weather")



// let weatherFetched = false; // Flag to track whether weather info has been fetched

// let latitude = 0; // Initialize latitude with a default value
// let longitude = 0; // Initialize longitude with a default value

// // button.addEventListener("click", () => {
// //     if (input1.value === "") {
// //         input1.style.border = "1px solid red";
// //         input1.value = ""; // Clear the input value
// //         input1.placeholder = "This field is required"; // Restore a helpful placeholder
// //     } else {
// //         // If the input is not empty, remove the red border
// //         input1.style.border = "";
// //     }



//     // if (input1.value !== "") {
//     if ("geolocation" in navigator) {
//         // Geolocation is available
//         navigator.geolocation.getCurrentPosition(function(position) {
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;

//         console.log("Latitude: " + latitude);
//         console.log("Longitude: " + longitude);




//         // You can use latitude and longitude for your application here
//         }, function(error) {
//         // Handle error cases
//         switch (error.code) {
//             case error.PERMISSION_DENIED:
//             console.error("User denied the request for geolocation.");
//             break;
//             case error.POSITION_UNAVAILABLE:
//             console.error("Location information is unavailable.");
//             break;
//             case error.TIMEOUT:
//             console.error("The request to get user location timed out.");
//             break;
//             case error.UNKNOWN_ERROR:
//             console.error("An unknown error occurred.");
//             break;
//         }
//         });
//     } else {
//         // Geolocation is not available in this browser
//         console.error("Geolocation is not available in this browser.");
//     }

//     button.addEventListener("click", () => {
//         if (input1.value === "") {
//           input1.style.border = "1px solid red";
//           input1.value = ""; // Clear the input value
//           input1.placeholder = "This field is required"; // Restore a helpful placeholder
//         } else {
//           // If the input is not empty, remove the red border
//           input1.style.border = "";

//         if (!weatherFetched) {  
//         if ("geolocation" in  navigator){
//         const apiKey = '1f8e49566cee5cc1e31369f230339bad';
//         const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

//         fetch(apiUrl)
//             .then(response => response.json())
//             .then(data => {
//                 // Extract weather information from the API response
//                 const temperature = data.main.temp;
//                 const weatherDescription = data.weather[0].description;

//                 // Display weather information on the webpage
//                 weatherDisplay.innerHTML = `
//                     <h2>Weather in Your Location</h2>
//                     <p>Temperature: ${temperature}°C</p>
//                     <p>Condition: ${weatherDescription}</p>
//                 `;
//             container.style.display = "none"; // Hide the input container
//             weatherFetched = true; // Set the flag to true after fetching weather data

//             console.log(data)
//             })
//             .catch(error => {
//                 console.error("Error fetching weather data:", error);
//             });
//         } else {
//             // Geolocation is not available in this browser
//             console.error("Geolocation is not available in this browser.");
//           }
//         }
//         }
//       });


//     // if(input1.value != ""){
//     //     container.style.display = "none";
//     // }



// const input1 = document.querySelector(".input");
// const button = document.querySelector(".button");
// const container = document.querySelector(".container");
// const weatherDisplay = document.querySelector(".weather-display");

// let weatherFetched = false; // Flag to track whether weather info has been fetched
// let latitude = 0; // Initialize latitude with a default value
// let longitude = 0; // Initialize longitude with a default value
// if ("geolocation" in navigator) {
//     // Geolocation is available
//     navigator.geolocation.getCurrentPosition(
//       function (position) {
//         latitude = position.coords.latitude;
//         longitude = position.coords.longitude;
//       }
//     )
// }

// button.addEventListener("click", () => {
//   if (input1.value === "") {
//     input1.style.border = "1px solid red";
//     input1.value = ""; // Clear the input value
//     input1.placeholder = "This field is required"; // Restore a helpful placeholder
//   } else {
//     // If the input is not empty, remove the red border
//     input1.style.border = "";

//     if (!weatherFetched) {

//             console.log("Latitude: " + latitude);
//             console.log("Longitude: " + longitude);

//             const apiKey = '1f8e49566cee5cc1e31369f230339bad';
//             const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

//             fetch(apiUrl)
//               .then((response) => response.json())
//               .then((data) => {
//                 const temperature = data.main.temp;
//                 const weatherDescription = data.weather[0].description;

//                 weatherDisplay.innerHTML = `
//                   <h2>Weather in Your Location</h2>
//                   <p>Temperature: ${temperature}°C</p>
//                   <p>Condition: ${weatherDescription}</p>
//                 `;

//                 container.style.display = "none";
//                 weatherFetched = true;

//                 console.log(data);
//               })
//               .catch((error) => {
//                 console.error("Error fetching weather data:", error);
//               });

//           function (error) {
//             // Handle error cases
//             switch (error.code) {
//               case error.PERMISSION_DENIED:
//                 console.error("User denied the request for geolocation.");
//                 break;
//               case error.POSITION_UNAVAILABLE:
//                 console.error("Location information is unavailable.");
//                 break;
//               case error.TIMEOUT:
//                 console.error("The request to get user location timed out.");
//                 break;
//               case error.UNKNOWN_ERROR:
//                 console.error("An unknown error occurred.");
//                 break;
//             }


//       } else {
//         // Geolocation is not available in this browser
//         console.error("Geolocation is not available in this browser.");
//       }
//     }

// });

const input1 = document.querySelector(".input");
const button = document.querySelector(".button");
const container = document.querySelector(".container");
const weatherDisplay = document.querySelector(".weather-display");

let weatherFetched = false; // Flag to track whether weather info has been fetched
let latitude = 0; // Initialize latitude with a default value
let longitude = 0; // Initialize longitude with a default value

if ("geolocation" in navigator) {
  // Geolocation is available
  navigator.geolocation.getCurrentPosition(
    function (position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      document.getElementsByClassName("map1")[0].src = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;z%3D14&amp&output=embed`
      setTimeout(function () {
        document.getElementsByClassName("map1")[0].style.filter = "blur(0)"
      }, 800)
      document.getElementsByClassName("map2")[0].href = `https://maps.google.com/maps(?q=${latitude},${longitude}&hl=es;z%3D14&amp&output=embed`
      button.addEventListener("click", () => {
        if (input1.value === "") {
          input1.style.border = "1px solid red";
          input1.value = ""; // Clear the input value
          input1.placeholder = "This field is required"; // Restore a helpful placeholder
        } else {
          // If the input is not empty, remove the red border
          input1.style.border = "";

          if (!weatherFetched) {
            const apiKey = '1f8e49566cee5cc1e31369f230339bad';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

            fetch(apiUrl)
              .then((response) => response.json())
              .then((data) => {
                const temperature = data.main.temp;
                // const weatherDescription = data.weather[0].description;
                const weatherDescriptionsMapping = {
                  'clear sky': 'imgs/clearsky.jpg',
                  'few clouds': 'imgs/fewclouds.jpg',
                  'scattered clouds': 'imgs/scatteredclouds/jpg',
                  'broken clouds': 'imgs/brokenclouds.jpg',
                  'shower rain': 'imgs/showerrain.jpg',
                  'rain': 'imgs/rain.jpg',
                  'thunderstorm': 'imgs/thunder.jpg',
                  'snow': 'imgs/snow.jpg',
                  'mist': 'imgs/misty.JPG',
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
                weatherFetched = true;

                console.log(data);
              })
              .catch((error) => {
                console.error("Error fetching weather data:", error);
              });
          } else {
            console.log("Weather data already fetched.");
          }
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
    }
  );
} else {
  console.error("Geolocation is not available in this browser.");
}
