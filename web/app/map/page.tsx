import { Box } from "@mui/material";
import { getWindSpeedByCoord } from "../actions";

export default async function Map() {
    const data = await getWindSpeedByCoord({latitude: 47.1219, longitude: -88.569});
    console.log(data);
    return (
        <Box>
            {data.current.wind_speed_120m} km/h
        </Box>
    )
}