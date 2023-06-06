"use strict";

const cityDropDown = document.getElementById("cityDropDown");


window.onload = () => {

    cityDropDown.onchange = onCityDropDownChange;

    for (let city of cities) {

        let newOption = new Option(city.name);
        cityDropDown.appendChild(newOption);

        console.log(cityDropDown);
    }

};


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

}