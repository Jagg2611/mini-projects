const apiKey = "554b4536b1e8b8c8b3bb47324aa22b46";
const apiUrl = 
"https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const heading = document.querySelector(".Heading");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status === 404){
        document.querySelector(".error-message").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        heading.innerHTML = "<h1>Please enter a Valid City Name!</h1>";
    }
    else{
        var data = await response.json();

    //console.log(data);
    heading.innerHTML = "<h1>Weather Details Fetched.</h1>";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+" Km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/Clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/Clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/Rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error-message").style.display = "none";
    }
}

searchBtn.addEventListener("click", ()=>{

    checkWeather(searchBox.value);


});

