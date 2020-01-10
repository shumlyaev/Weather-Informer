$(document).ready(function() {
    createWeatherCard("Moscow");
});
function createWeatherCard(city) {
    $('.main-block').append('<div class="weather-card col-lg-6 col-md-6 col-sm-12"><div class="row"><div class="title col-lg-12 col-md-12 col-sm-12 col-12"><h3></h3><div class="refr-data"></div></div></div><div class="row"><div class="temp col-lg-3 col-md-4 col-sm-3 col-4"></div><div class="icon col-lg-3 col-md-3 col-sm-3 col-3"></div><div class="info-1 col-lg-6 col-md-5 col-sm-6 col-5"><div class="cloudiness col-lg-12 col-md-12 col-sm-12 col-12"></div><div class="feels_like col-lg-12 col-md-12 col-sm-12 col-12"></div></div></div><div class="info-2 row col-lg-12 col-md-12 col-sm-12 col-12"><div class="wind col-lg-12 col-md-12 col-sm-12 col-12"></div><div class="humidity col-lg-12 col-md-12 col-sm-12 col-12"></div><div class="pressure col-lg-12 col-md-12 col-sm-12 col-12"></div></div></div>');
    $.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
            "q" : city,
            "appid" : "d9db123aea542d04a65ff9d58dee2847"
        },
        function(data) {
            let date = new Date();
            $('.title h3').html('Weather in ' + data.name);
            $('.refr-data').html(monthToName(date.getMonth()) + ' ' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes());
            $('.temp').html(plusAdder(Math.floor((data.main.temp - 273) * 10) / 10));
            $('.icon').html('<img src="https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png"></img>');
            $('.cloudiness').html(data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1));
            $('.feels_like').html('Feels like ' + plusAdder(Math.floor((data.main.feels_like - 273) * 10) / 10));
            $('.wind').html('Wind ' + data.wind.speed + 'm/s');
            $('.humidity').html('Humidity ' + data.main.humidity + '%');
            $('.pressure').html('Pressure ' + Math.floor(data.main.pressure * 0.75) + 'mmHg');
        }
    );
}
function plusAdder(x) {
    if (x >= 0) 
        return '+' + x;
    else return x;
}
function monthToName(x) {
    if (x == 0) return 'Jan';
    if (x == 1) return 'Feb';
    if (x == 2) return 'Mar';
    if (x == 3) return 'Apr';
    if (x == 4) return 'May';
    if (x == 5) return 'Jun';
    if (x == 6) return 'Jul';
    if (x == 7) return 'Aug';
    if (x == 8) return 'Sep';
    if (x == 9) return 'Oct';
    if (x == 10) return 'Now';
    if (x == 11) return 'Dec';
}
/*
<div class="weather-card col-lg-6 col-md-6 col-sm-12">
        <div class="row">
                <div class="title col-lg-12 col-md-12 col-sm-12 col-12">
                        <h3></h3>
                        <div class="refr-data"></div>
                </div>      
        </div>
        <div class="row">
                <div class="temp col-lg-3 col-md-4 col-sm-3 col-4"></div>
                <div class="icon col-lg-3 col-md-3 col-sm-3 col-3"></div>
                <div class="info-1 col-lg-6 col-md-5 col-sm-6 col-5">
                        <div class="cloudiness col-lg-12 col-md-12 col-sm-12 col-12"></div>
                        <div class="feels_like col-lg-12 col-md-12 col-sm-12 col-12"></div>
                </div>
        </div>
        <div class="info-2 row col-lg-12 col-md-12 col-sm-12 col-12">                                                
                <div class="wind col-lg-12 col-md-12 col-sm-12 col-12"></div>
                <div class="humidity col-lg-12 col-md-12 col-sm-12 col-12"></div>
                <div class="pressure col-lg-12 col-md-12 col-sm-12 col-12"></div>                                              
        </div>
</div>
*/