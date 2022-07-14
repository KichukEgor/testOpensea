import axios from 'axios'

// `https://api.opensea.io/api/v1/assets?owner=${address}&order_direction=desc&offset=0&limit=16`
export const api = axios.create({
    baseURL: 'https://api.opensea.io/api',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json'
    }
})

