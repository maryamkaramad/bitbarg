import axios from 'axios';

const api = axios.create({
    baseURL: "https://coinranking1.p.rapidapi.com",
    headers: {
        'X-RapidAPI-Key': '276c89c394msh21f377e488a3ca5p17c6a0jsn1a59d5b0c9cc',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
});

export const handelget24hr = () => {
    return api(`/coins`).then(data => data.data.data.coins)
}



