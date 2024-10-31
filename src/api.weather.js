import axios from 'axios'

const weatherApi = axios.create({
    baseURL: "https://api.open-meteo.com/v1/"
})


export const getData = (latitude, longitude) => weatherApi.get('forecast?latitude=' + latitude + '&longitude=' + longitude + '&current=temperature_2m&timezone=auto&forecast_days=1')
export const getFutureDate = (latitude, longitude) => weatherApi.get('forecast?latitude=' + latitude + '&longitude=' + longitude + '&hourly=temperature_2m&timezone=auto&forecast_days=1')
export const getInfo = (latitude, longitude) => weatherApi.get('https://api.open-meteo.com/v1/forecast?latitude=' +  latitude + '&longitude=' + longitude +'&current=temperature_2m,precipitation,wind_speed_10m&hourly=precipitation_probability&timezone=auto&forecast_days=1')