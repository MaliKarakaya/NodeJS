
const axios = require('axios');


const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'YOUR_API_KEY'; // Buraya kendi API anahtarınızı ekleyin
const city = 'Istanbul';


async function getWeather() {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        q: city,
        appid: apiKey,
        units: 'metric', 
      },
    });

    const data = response.data;


    console.log(`Hava Durumu in ${city}:`);
    console.log(`Sıcaklık: ${data.main.temp}°C`);
    console.log(`Durum: ${data.weather[0].description}`);
  } catch (error) {
    console.error('Hava durumu alınamadı', error.message);
  }
}


getWeather();
