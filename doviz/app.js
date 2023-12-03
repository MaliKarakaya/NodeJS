
const axios = require('axios');

const apiUrl = 'https://open.er-api.com/v6/latest/USD';

async function getExchangeRates() {
    try {
        const response = await axios.get(apiUrl);
        const data = response.data;

        const usdToTryRate = data.rates['TRY'];

        console.log(`1 USD = ${usdToTryRate} TRY`);
    } catch (error) {
        console.error('Döviz kuru alınamadı', error.message);
    }
}

getExchangeRates();

