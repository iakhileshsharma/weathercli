const axios = require('axios');

function fetchWeather(CityName){
    const params = {
        access_key: '7e3e368b785eddcb2c9945a0bd9c6c25',
        query: CityName
    }

    axios.get('http://api.weatherstack.com/current', {params})
    .then(response => {
        const apiResponse = response.data;
        // console.log(apiResponse)
        console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
    }).catch(error => {
        console.log(error);
    });
}

module.exports = fetchWeather;