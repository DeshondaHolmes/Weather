"use strict";


//define cityDropDown as html id for dropdown list of cities
const cityDropDown = document.getElementById("cityDropDown");

const tableBody = document.getElementById("tableBody");


//arrow function to execute function when browser finish loading 
window.onload = () => {

    //on dropdown change a function will execute 
    cityDropDown.onchange = onCityDropDownChange;


    //loop through cities array creating a new option for each city in dropdown 
    for (let city of cities) {

        //newOption defined as city.name 
        let newOption = new Option(city.name);
        //create city name options in dropdown 
        cityDropDown.appendChild(newOption);

    }

};

//onCityDropDownChange function
function onCityDropDownChange (){


    let selectedCity = cityDropDown.value;

    const cityFilter = cities.filter(city=>city.name===selectedCity);

    if(cityFilter.length>0){
        for(let city of cityFilter){
            createCityTable(city);
        }
    }
}


function createCityTable(){
   let stationLookupUrl = `https://api.weather.gov/points/${selectedCity.latitude},${selectedCity.longitude}`;

   
       fetch(stationLookupUrl)
           .then(response => response.json())
           .then(data => {
        });


}

//onCityDropDownChange function
// function onCityDropDownChange() {


//     let selectedCity = cityDropDown.value;

//     const cityFilter = cities.filter(city => city.name === selectedCity);


// }


// function createCityTable(city) {

   
//         let row = table.insertRow();
//         let cell1 = row.insertCell();
//         let cell2 = row.insertCell();
//         let cell3 = row.insertCell();


//         cell1.innerHTML = data[i].city;
//         cell2.innerHTML = data[i].city;
//         cell3.innerHTML = data[i].city;
//     }


// }

