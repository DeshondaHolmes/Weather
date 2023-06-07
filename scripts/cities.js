"use strict";


//define cityDropDown as html id for dropdown list of cities
const cityDropDown = document.getElementById("cityDropDown");

const tableBody = document.getElementById("tableBody");

aCitySelected = cityDropDown.value;
 // Add a variable to store the selected city

//arrow function to execute function when browser finish loading 
window.onload = () => {

    //on dropdown change a function will execute 
    cityDropDown.onchange = showGeographicLocation;


    //loop through cities array creating a new option for each city in dropdown 
    for (let City of cities) {

        //newOption defined as city.name 
        let newOption = new Option(City.name);
        //create city name options in dropdown 
        cityDropDown.appendChild(newOption);

    }

};

function showGeographicLocation() {

    aCitySelected = cityDropDown.value; // Update the selected city

    if (aCitySelected !== "") {
        const aCitySeletected = cities.find(city => city.name === aCitySeletected);

        const latitude = aCitySeletected.latitude;
        const longitude = aCitySeletected.longitude;

        // console.log(latitude);  // Outputs: Latitude
        // console.log(longitude); // Outputs: Longitude

        // latitudeOutput.innerHTML = latitude;
        // longitudeOutput.innerHTML = longitude;

        showGeographicLocation();
        createWeatherTable();
        getWeatherApiForCity(latitude, longitude);
    }
}

//onCityDropDownChange function

function getWeatherApiForCity() {

   
    let stationLookupUrl = `https://api.weather.gov/points/${aCitySelected.latitude},${aCitySelected.longitude}`;
    let aCitySelected = cities.find(city => city.name === aCitySelected);
    fetch(stationLookupUrl)
    .then(response => response.json())
    .then(data => {
        const weatherApiUrl = data.properties.forecast;
        getWeather(weatherApiUrl);
    });
}

function getWeather(weatherApiUrl) {
    fetch(weatherApiUrl)
    .then(response => response.json())
    .then(data => {
        const forecastArray = data.properties.periods;
        createWeatherTable(forecastArray);
    });

}



function createWeatherTable(forecastArray) {
    // tableBody.innerHTML = "";


    for (let cityWeather of forecastArray){

        let row = tableBody.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell();
        let cell3 = row.insertCell();

    
    
        cell1.innerHTML = "Hello" + cityWeather.name;
        cell2.innerHTML = cityWeather.temperature + cityWeather.temperatureUnit;
        cell3.innerHTML = cityWeather.temperature + cityWeather.temperatureUnit;




    }
}


