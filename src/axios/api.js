import axios from 'axios';

const api = axios.create({
    baseURL: "https://78621d56-8cd2-42ff-8df2-fd213f2d9352.mock.pstmn.io/",
    headers: {
        'X-RapidAPI-Key': '539e4bb6cfmsh6fcf58c502241cdp175c4ejsnedbbc1df4226',
        'X-RapidAPI-Host': 'binance43.p.rapidapi.com'
    }
});

export const handelget24hr = () => {
    return api(`ticker/24hr`).then(data => data.data)
}

export const handelgetdataprice = () => {
    return api(`ticker/price`).then(data => data.data)
}

