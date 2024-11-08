"use client"
import * as React from 'react'
import {Box, Card, CardContent, CardMedia, Grid2, Typography} from "@mui/material";


export default function Home() {
  return (
    <Box sx={{textAlign: 'center', padding: '0.5rem 1rem'}}>
      <Typography variant="h2" sx={{padding: '0rem 0rem 0.5rem'}}>
        SS3801 GLOW Final Project
      </Typography>
      <Grid2 container spacing={2}>
        <Grid2 size={5}>
          <Card>
            <CardContent>
              <Typography variant='body1'>Test</Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={7}>
          <Card>
            <CardMedia component='img' height='200' image='/Users/luke/Desktop/College/Science&Tech/SS3801-GLOW-Research-Project/web/app/images/map-great-lakes.jpg'/>
          </Card>
        </Grid2>
      </Grid2>
    </Box>
  );
}
