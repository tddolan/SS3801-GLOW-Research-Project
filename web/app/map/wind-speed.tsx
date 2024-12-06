"use client"

import { Box, Divider, Stack, Typography } from "@mui/material";
import WindSpeedForm from "./wind-speed-form";
import { useState } from "react";
import { WindData } from "../types/wind-data";
import { getWindSpeedByCoord } from "../actions";
import { Coordinate } from "../types/coordinate";

export default function WindSpeed() {
  const [windData, setWindData] = useState<WindData | undefined>(undefined)
  const handleFetch = (coordinate: Coordinate) => {
    getWindSpeedByCoord(coordinate).then((value: WindData) => {
      setWindData(value);
    });
    
  }
  return (
    <Stack padding={1} width={"20rem"}>
      <Typography variant="h6">Query Wind Data</Typography>
      <Stack padding={1} sx={{ border: 1}}>
        <Typography>Lattitude: {windData?.latitude ?? ""}</Typography>
        <Typography>Longitude: {windData?.longitude ?? ""}</Typography>
        <Typography>Wind Speed: {windData?.current.wind_speed_120m ?? ""} km/h</Typography>
      </Stack>
      <Box height={"2rem"}/>
      <WindSpeedForm handleFetch={handleFetch}/>
    </Stack>
  )
}