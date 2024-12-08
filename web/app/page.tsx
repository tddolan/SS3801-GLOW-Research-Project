"use client";
import React from "react";
import { Box, Card, CardContent, CardMedia, Grid, Typography, Button } from "@mui/material";
import Link from "next/link"

export default function Home() {
  return (
    <Box sx={{ textAlign: "center", padding: "1rem 2rem" }}>
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          padding: "2rem",
          backgroundColor: "#e3f2fd",
          borderRadius: "10px",
          marginBottom: "2rem",
        }}
      >
        <Typography variant="h2" sx={{ marginBottom: "1rem" }}>
          SS3801 GLOW Final Project
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
          Exploring Offshore Wind Energy in the Great Lakes Region
        </Typography>
        <Link href="/info" passHref>
        <Button variant="contained" color="primary" size="large">
          Learn More
        </Button>
        </Link>
      </Box>

      {/* Highlights Section */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image="https://www.nps.gov/subjects/renewableenergy/images/offshorewind_NREL27847.jpg"
              alt="Image of offshore wind turbines"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Wind Energy Potential
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Discover the immense potential of offshore wind in the Great Lakes and how it can drive renewable energy innovation.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image="https://svmillets.com/wp-content/uploads/2021/09/AdobeStock_88537080-scaled-300x300.jpeg"
              alt="Image of eco friendly within a speech bubble"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Environmental Benefits
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn about the environmental advantages of harnessing wind power and reducing dependency on fossil fuels.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image="https://www.3blmedia.com/sites/default/files/styles/carousel_2x/public/citizenship_icon-CI_rev_1_1_.png"
              alt="Image of interlocking hands to show community"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Community Impact
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Explore how offshore wind energy projects can create jobs, boost local economies, and foster sustainable development.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Footer Section */}
      <Box
        sx={{
          marginTop: "3rem",
          padding: "1rem",
          backgroundColor: "#f1f1f1",
          borderRadius: "5px",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {new Date().getFullYear()} Offshore Wind in the Great Lakes | Designed for SS3801 GLOW Final Project
        </Typography>
      </Box>
    </Box>
  );
}
