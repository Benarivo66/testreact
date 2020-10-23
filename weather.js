function getWeather() {
    var cityName = document.getElementById("myInput").value;
    const city = document.getElementById("city");
  city.innerHTML = cityName;
   const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=233ba0014a0d58bddf5edbd7d7355321`; 
   
    fetch(url).then(response => {
       return response.json();
      })
       .then(data => {
         console.log(data);
         document.getElementById("temp").innerHTML = Math.round(data.main.temp - 273) + "&degC";
         document.getElementById("descrp").innerHTML = data.weather[0]["description"];
         document.getElementById("date").innerHTML = new Date();
         var iconId = data.weather[0]["icon"];
         console.log("iconId", iconId);
         var weatherIcon = document.getElementsByClassName("weather-icon");
         console.log("weatherIcon", weatherIcon)
        weatherIcon[0].innerHTML = `<img src="http://openweathermap.org/img/wn/${iconId}@2x.png">`
       }) 
       .catch(error => {
           alert('Error: enter a valid city name', error);
       })
  }
  
  
  
  