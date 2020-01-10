$(document).ready(function() {
    createWeatherCard("Moscow");
});
function createWeatherCard(city) {
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
