import { Box } from "@mui/material";
import { getWindSpeedByCoord } from "../actions";
import WindSpeed from "./wind-speed";

export default async function WindSpeedPage() {
    const data = await getWindSpeedByCoord({latitude: 47.1219, longitude: -88.569});
    console.log(data);
    return (
        <Box>
            <WindSpeed />
        </Box>
    )
}