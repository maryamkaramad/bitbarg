import axios from 'axios';

const api = axios.create({
    baseURL: "https://binance43.p.rapidapi.com",
    headers: {
        'X-RapidAPI-Key': '539e4bb6cfmsh6fcf58c502241cdp175c4ejsnedbbc1df4226',
        'X-RapidAPI-Host': 'binance43.p.rapidapi.com'
    }
});

export const handelget24hr = () => {
    return api(`/ticker/24hr`).then(data => data.data)
}

export const handelgetdataprice = () => {
    return api(`/ticker/price`).then(data => data.data)
}

