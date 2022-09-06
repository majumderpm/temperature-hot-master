

const API_KEY = `c9563e89c99cc1e65516e37288bb01f5`;


const loadtemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}

const displayTemperature = data => {
    // const temperature = document.getElementById('temperature');
    // console.log(data.main.temp);
    // temperature.innerText = data.main.temp;

     setInnerTextById('temperature', data.main.temp);
     setInnerTextById('condition', data.weather[0].main);
    console.log(data.weather[0].main);
} 




// function deceration

const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
    // console.log(data)
}






// ////////////////////////////////////////////////// search city 

document.getElementById('btn_search').addEventListener('click', function(){
    const searchField = document.getElementById('search_field');
    const city = searchField.value;

    /// add to city name

    document.getElementById('city').innerText = city;

    loadtemperature(city);
})







setInnerTextById()

loadtemperature('india')