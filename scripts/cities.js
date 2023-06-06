"use strict";

const cityDropDown = document.getElementById("cityDropDown");


window.onload = () => {

    cityDropDown.onchange = onCityDropDownChange;

    for (let city of cities) {

        let newOption = new Option(city.name);
        debugger
        cityDropDown.appendChild(newOption);
    }

};


function onCityDropDownChange (){

    let selectedCity = cityDropDown.value;

    const cityFilter = cities.filter(city=>city.name===selectedCity);
}