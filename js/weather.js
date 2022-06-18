const API_KEY = "bb3a6a75c03f2ecd844d2aaa2a4414e3"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(`You live in ${lat}, ${lon}`);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data=>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} /`;
    });
}

function onGeoError(){
    alert("I can't find you! No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);