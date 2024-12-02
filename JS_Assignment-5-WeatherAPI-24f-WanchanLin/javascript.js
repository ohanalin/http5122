window.onload = function () {

    // Elements for displaying output
    var out_location = document.getElementById("location");
    var out_temp = document.getElementById("temperature");
    var out_icon = document.getElementById("icon");
    var out_conditions = document.getElementById("conditions");
    var out_error = document.getElementById("error");
    var out_humidity = document.getElementById("humidity");

    function getweather(city) {
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e221a0122131b25991e11a0e22d3a58e&units=metric`; var xhr = new XMLHttpRequest();
        var xhr = new XMLHttpRequest(); 
        xhr.open('GET', url, true);
        xhr.responseType = "json";
        xhr.send(null);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var DATA = xhr.response;
                    console.log(DATA);
                    out_location.innerHTML = DATA.name;
                    out_conditions.innerHTML = DATA.weather[0].description[0].toUpperCase() + DATA.weather[0].description.substring(1) + ".";
                    out_temp.innerHTML = Math.round(DATA.main.temp) + "&deg;C";
                    // Update humidity
                    out_humidity.innerHTML = DATA.main.humidity + "%";

                    //update weather icon 
                    var iconUrl = `https://openweathermap.org/img/wn/${DATA.weather[0].icon}@2x.png`;
                    out_icon.innerHTML = `<img src="${iconUrl}" alt="${DATA.weather[0].description}">`;
                    // Clear error
                    out_error.innerHTML = "";

                } else {
                    out_error.innerHTML = "Error fetching weather data. Please try again.";
                    console.log(xhr.status);

                }

            }
        };
    }


    // Add event listeners to buttons
    document.getElementById("Toronto").addEventListener("click", function () {
        getweather("Toronto");
        document.getElementById("output").style.display = "block";
    });
    document.getElementById("Taipei").addEventListener("click", function () {
        getweather("Taipei");
        document.getElementById("output").style.display = "block";
    });
}
