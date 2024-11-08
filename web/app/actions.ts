import { fetchWeatherApi } from 'openmeteo';

export async function getWindSpeedByCoord(coord: Coordinate) {
    const params = {
        "latitude": coord.latitude,
        "longitude": coord.longitude,
        "hourly": "wind_speed_10m",
        "models": "gfs_seamless"
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);
    
    return responses[0].current();
}