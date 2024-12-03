"use client";
import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";

export default function Info() {
  const sections = [
    {
      title: "Wind Energy Potential",
      image: "https://via.placeholder.com/600", // Replace with relevant image URL
      description:
        "The Great Lakes region is uniquely positioned to become a leader in renewable energy. With consistent wind patterns and vast water bodies, offshore wind farms can generate significant power to meet growing energy demands.",
    },
    {
      title: "Environmental Benefits",
      image: "https://via.placeholder.com/600", // Replace with relevant image URL
      description:
        "Offshore wind energy provides a clean, renewable alternative to fossil fuels, reducing greenhouse gas emissions and combating climate change. This technology also helps preserve local ecosystems by minimizing land disruption.",
    },
    {
      title: "Community Impact",
      image: "https://via.placeholder.com/600", // Replace with relevant image URL
      description:
        "Offshore wind projects can revitalize local economies by creating jobs, driving innovation, and fostering sustainable development. These initiatives also strengthen energy independence and security for the region.",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ padding: "2rem" }}>
      {/* Page Header */}
      <Typography variant="h2" sx={{ textAlign: "center", marginBottom: "2rem" }}>
        Learn More About Offshore Wind Energy
      </Typography>

      {/* Sections */}
      {sections.map((section, index) => (
        <Grid
          container
          spacing={4}
          key={index}
          sx={{
            marginBottom: "4rem",
            alignItems: "center",
            flexDirection: index % 2 === 0 ? "row" : "row-reverse", // Alternate layout
          }}
        >
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              {section.title}
            </Typography>
            <Typography variant="body1">{section.description}</Typography>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={section.image}
              alt={section.title}
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid>
        </Grid>
      ))}

      {/* Closing Section */}
      <Box
        sx={{
          padding: "2rem",
          backgroundColor: "#e3f2fd",
          borderRadius: "10px",
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Join the Movement
        </Typography>
        <Typography variant="body1">
          Offshore wind energy represents a sustainable future for the Great Lakes region. Let’s build a cleaner and greener tomorrow together.
        </Typography>
      </Box>
    </Container>
  );
}