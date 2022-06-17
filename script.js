let weather = {
    "apiKey": "60c964d0c2e068428b07ec96fa175dbc",
    fetchWeather: function (city)
    {fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon,description} =data.weather[0];
        const { temp, Humidity} = data.main;
        const {speed } = data.wind;
        document.querySelector(".City").innerText = "Weather in: " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +"@2x.png"
        document.querySelector(".temp").innerText = "Temperature is: " + temp; 
        document.querySelector(".description").innerText ="Skys are: " +  description;
        document.querySelector(".humidity").innerText = "Humidity is: " + Humidity;
        document.querySelector(".WindSpeed").innerText = "Wind Speed is: " + speed;
    },
    search: function(){
        this.fetchWeather(document.querySelector(".ssearch").value);
    }
};

document.querySelector(".searchbtn").addEventListener("click", function( ) {
 weather.search();
} );

document.querySelector(".ssearch").addEventListener("click", function(event) {
            if (event.key == "Enter"){
                weather.search();
            }
})