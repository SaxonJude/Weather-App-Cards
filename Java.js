async function weatherAPI(woeid) {
    try{
        // Retrieve Data
      
        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
        const data = result.json();
        // Manipulate Data
        return data;
    } catch(error) {
        console.log(error);
    };
};
let results;
weatherAPI(44418).then(data => {
    results = data;
    console.log(results);
    const today = results.consolidated_weather[0];
    const tomorrow = results.consolidated_weather[1];
    const dayAfter = results.consolidated_weather[2];
    const todayName = results.title;
    document.querySelector('.london').textContent = `${todayName}`;
    document.querySelector('.weather_state').textContent = `${today.weather_state_name}`
    document.querySelector('.the_temp1').textContent = `${Math.round(today.the_temp)}°`
    document.querySelector('.humidityLabel1').textContent = `${today.humidity}%`;
    document.querySelector('.windLabel1').textContent = `${Math.round(today.wind_speed)} K/M`;
    document.querySelector('.ftopright1').textContent = `${Math.round(tomorrow.the_temp)}°`
    document.querySelector('.fbotright1').textContent = `${Math.round(dayAfter.the_temp)}°`
    document.querySelector('.dayafter1').textContent = `${dayAfter.applicable_date}`
    document.querySelector('.dayafter3').textContent = `${dayAfter.applicable_date}`
});
weatherAPI(2487956).then(data => {
    results = data;
    console.log(results);
    const today = results.consolidated_weather[0];
    const tomorrow = results.consolidated_weather[1];
    const dayAfter = results.consolidated_weather[2];
    const todayName = results.title;
    document.querySelector('.sanFran').textContent = `${todayName}`;
    document.querySelector('.weather_state').textContent = `${today.weather_state_name}`
    document.querySelector('.the_temp2').textContent = `${Math.round(today.the_temp)}°`
    document.querySelector('.humidityLabel2').textContent = `${today.humidity}%`;
    document.querySelector('.windLabel2').textContent = `${Math.round(today.wind_speed)} K/M`;
    document.querySelector('.ftopright2').textContent = `${Math.round(tomorrow.the_temp)}°`
    document.querySelector('.fbotright2').textContent = `${Math.round(dayAfter.the_temp)}°`
    document.querySelector('.dayafter2').textContent = `${dayAfter.applicable_date}`
});
