"use strict";


//define cityDropDown as html id for dropdown list of cities
const cityDropDown = document.getElementById("cityDropDown");

const tableBody = document.getElementById("tableBody");

let selectedCity = ""; // Add a variable to store the selected city

//arrow function to execute function when browser finish loading 
window.onload = () => {

    //on dropdown change a function will execute 
    cityDropDown.onchange = showGeographicLocation;


    //loop through cities array creating a new option for each city in dropdown 
    for (let aCity of cities) {

        //newOption defined as city.name 
        let newOption = new Option(aCity.name);
        //create city name options in dropdown 
        cityDropDown.appendChild(newOption);

    }

};

function showGeographicLocation() {

    selectedCity = cityDropDown.value; // Update the selected city

    if (selectedCity !== "") {
        const city = cities.find(city => city.name === selectedCity);

        const latitude = city.latitude;
        const longitude = city.longitude;

        // console.log(latitude);  // Outputs: Latitude
        // console.log(longitude); // Outputs: Longitude

        // latitudeOutput.innerHTML = latitude;
        // longitudeOutput.innerHTML = longitude;

        
        createWeatherTable();
        getWeatherApiForCity(latitude, longitude);
    }
}

//onCityDropDownChange function

function getWeatherApiForCity(latitude,longitude) {

   
    let stationLookupUrl = `https://api.weather.gov/points/${latitude},${longitude}`;
    let selectedCity = cities.find(city => city.name === selectedCity);
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
    tableBody.innerHTML = "";


    for (let cityWeather of forecastArray){

        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell();
        let cell3 = row.insertCell();

    
    
        cell1.innerHTML = cityWeather.name;
        cell2.innerHTML = cityWeather.temperature;
        cell3.innerHTML = cityWeather.temperature + cityWeather.temperatureUnit;




    }
}


