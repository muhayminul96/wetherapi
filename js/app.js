console.log('hello i am back');

const loadWeather = () => {
    const apiKey = 'e194ffdc3e0a7da134c5aa9635213b3d';
    const cityNameInput = document.getElementById('city-input');
    cityName = cityNameInput.value;
    cityNameInput.value = ''
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => showData(data))
    
}


const showData = data =>{
    const city = document.getElementById('city').innerText = data.name;
    const temp = document.getElementById('temp').innerText = data.main.temp;
    const image = document.getElementById('images').setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    const WeatherType =  document.getElementById('weather-type').innerText = data.weather[0].main;

    console.log(data)
}