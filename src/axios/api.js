import axios from 'axios';

const api = axios.create({
    baseURL: "https://deeff1f9-fa7d-49c9-870e-e99b2305debc.mock.pstmn.io",

});

export const handelget24hr = () => {
    return api(`/ticker/24hr`).then(data => data.data)
}

export const handelgetdataprice = () => {
    return api(`/ticker/pricev`).then(data => data.data)
}

