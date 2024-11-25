window.onload = function (){
    var out_location=document.getElementById("location");
    var out_temp = document.getElementById("temperature");
    var out_conditions =document.getElementById("conditions");
    
    var url="https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=e221a0122131b25991e11a0e22d3a58e&units=metric";
    var xhr= new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.responseType="json";
    xhr.send(null);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4){
            if(xhr.status=== 200){
                var DATA = xhr.response;
                console.log(DATA);
                out_location.innerHTML=DATA.name;
                out_conditions.innerHTML=DATA.weather[0].description[0].toUpperCase()+DATA.weather[0].description.substring(1)+".";
                out_temp.innerHTML=Math.round(DATA.main.temp) + "&deg;C";
            }else{
                out_location.innerHTML="API call was unsuccessful";
                console.log(xhr.status);
                      }

        }
    }
}