function updateWeather(lat, lng) {

const part = 'minutely'; 
const apiKey = 'eaee3002bb3eb97eda283a3017308de6'; 

const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&units=metric&exclude=${part}&appid=${apiKey}`;



function getWeekDay(dt) {
    const language = 'en-us';
    const options = {  weekday: 'long' };
    return new Date(dt*1000).toLocaleString(language, options);


}



fetch(url)
  .then(response => response.json())
  .then(data => {
    // Process the weather data here
        console.log(data)
    const {alerts, current, daily, hourly} = data;
        document.getElementById("swiper-wrapper").innerHTML = "";


    for(let day of daily) {
        let date = new Date(day.dt * 1000);
        let dateString = date.getDate().toString() + "/" + (date.getMonth() + 1).toString();
        const {icon, description} = day.weather[0];
        const weatherCard = `
            <div class="card">
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png"  alt="Weather Image">
            <div class="card-body">
                <h5 class="card-title fw-bolder">${getWeekDay(day.dt)}</h5>
                <h5 class="card-title fw-bolder">${parseInt(day.temp.max)}°C</h5>

                <p class="card-text fw-bold">${dateString}</h5>
                <p class="card-text fw-bolder"><span class="capitalize h4"> ${description}</span></p>
                <p class="card-text fw-bolder">Humidity: ${day.humidity}%</p>
                <p class="card-text fw-bolder">Feels Like: ${day.feels_like.day}°C</p>
                <p class="card-text fw-bolder">Wind Speed: ${day.wind_speed} km/h</p>
                <p class="card-text fw-bolder">Sunrise: ${new Date(day.sunrise*1000).getHours()}:${new Date(day.sunrise*1000).getMinutes().toString().padStart(2, "0")} AM</p>
                <p class="card-text fw-bolder">Sunset: ${new Date(day.sunset*1000).getHours()}:${new Date(day.sunset*1000).getMinutes().toString().padStart(2, "0")} PM</p>
            </div>
            </div>
            `;
        
            let div = document.createElement("div");
            div.classList.add("swiper-slide");
            div.innerHTML = weatherCard;
            document.getElementById("swiper-wrapper").append(div);

    }

   

  }).then(() => {
  //swiper to have project examples in a slider
  const swiper2 = new Swiper(".swiper-container", {
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 5,
    direction: "horizontal",
    loop: true,
    speed: 600,
    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //         spaceBetween: 0
    //     },
    //     480: {
    //         slidesPerView: 1,
    //         spaceBetween: 0
    //     },
    //     900: {
    //         slidesPerView: 1,
    //         spaceBetween: 0
    //     }

    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

  })
  .catch(error => {
    // Handle any errors that occurred during the fetch request
    console.log('Error:', error);
  });



  




}


updateWeather("55.8642", "-4.2518");



const autocompleteService = new google.maps.places.AutocompleteService();

const placesService = new google.maps.places.PlacesService(document.createElement('div'));

function getCityDetails(placeId) {
  placesService.getDetails({ placeId }, (place, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      console.log('Selected city:', place.name);
      console.log(place.geometry.location.lng())
      updateWeather(place.geometry.location.lat(),place.geometry.location.lng());
      document.querySelector("#city").innerHTML = place.name;
      // Perform any further actions with the selected city
    }
  });
}

const cityInput = document.getElementById('city-input');
cityInput.addEventListener('input', () => {
  const inputText = cityInput.value;
  autocompleteService.getPlacePredictions(
    { input: inputText, types: ['(cities)'] },
    (predictions, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        
        showAutocompleteResults(predictions);
      }
    }
  );
});


function showAutocompleteResults(predictions) {
    const autocompleteList = document.getElementById('autocomplete-list');
    autocompleteList.innerHTML = '';
  
    predictions.forEach(prediction => {
      const listItem = document.createElement('li');
      listItem.textContent = prediction.description;
      listItem.classList.add('list-group-item'); // Add Bootstrap class
      
      listItem.addEventListener('click', () => {
        cityInput.value = prediction.description;
        getCityDetails(prediction.place_id);
        autocompleteList.style.display = 'none';
      });
      
  
      listItem.addEventListener('mouseenter', () => {
        listItem.classList.add('active');
      });
      
      listItem.addEventListener('mouseleave', () => {
        listItem.classList.remove('active');
      });
  
      autocompleteList.appendChild(listItem);
    });
  
    autocompleteList.style.display = predictions.length > 0 ? 'block' : 'none';
  }
  
