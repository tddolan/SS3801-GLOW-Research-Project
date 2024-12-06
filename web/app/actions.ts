import { Coordinate } from "./types/coordinate";
import { WindData } from "./types/wind-data";

export async function getWindSpeedByCoord(coord: Coordinate): Promise<WindData>{
  const url = "https://api.open-meteo.com/v1/forecast";
  const params = `?latitude=${coord.latitude}&longitude=${coord.longitude}&current=wind_speed_120m&models=gem_seamless`
  const responses = await fetch(
    `${url}${params}`,
    { method: 'GET'}
  );

  return responses.json();
}
