"use client";
import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { describe } from "node:test";

export default function Info() {
  const sections = [
    {
      title: "Wind Energy Potential",
      image: "https://www.nrel.gov/news/program/2023/images/20230626-great-lakes-offshorewind-satellite-nasa-a2012097-center.jpg",
      description: `
      <p>The Great Lakes region is uniquely positioned to become a leader in renewable energy. With consistent wind patterns and vast water bodies, offshore wind farms can generate significant power to meet growing energy demands.</p>
      <blockquote>“The US Department of Energy says that the lakes collectively boast the potential to provide 700 gigawatts of offshore electricity – enough to power millions of homes” <cite>The Guardian</cite></blockquote>
      <blockquote>“Wind resource assessments estimate that the Great Lakes' potential power capacity is 160 gigawatts for fixed-bottom wind turbines and about 415 gigawatts for floating wind energy systems” <cite>NREL</cite></blockquote>
    `,
    },
    {
      title: "Environmental Benefits",
      image: "https://www.eekwi.org/sites/default/files/2019-11/istock-1058748474.jpg",
      description: `
      <p>Offshore wind energy provides a clean, renewable alternative to fossil fuels, reducing greenhouse gas emissions and combating climate change. This technology also helps preserve local ecosystems by minimizing land disruption.</p>
      <blockquote>“the share of Michigan's total electricity generation from natural gas-fired plants increased from 12% in 2013 to 46% in 2023. Michigan produces 58,510 thousand metric tons of carbon dioxide emissions in the electric power industry, which is 3.5 percent of the total U.S. contribution in this area” <cite>U.S. Energy Information Administration, "Michigan"</cite></blockqoute>
      <p>The introduction of wind energy production would greatly help and reduce the need for electrictiy generation from natural-gas fired plants.</p>
      <blockquote>“Offshore wind energy offers the potential to generate electricity without consuming Great Lakes water and without emitting pollutants that harm the Great Lakes ecosystems, human health and the global climate.” <cite>Michigan Sea Grant</cite></blockquote>
    `,
    },
    {
      title: "Envirnmental Disadvantages",
      image: "https://sustainablereview.com//wp-content/uploads/2023/07/asdgqegge-1024x576.jpg",
      description: `
      <p>The main environmental disadvantage of wind energy in the Great Lakes is the potential disruption to freshwater ecosystems.</p>
      <p>In regard to fish habitats in the great lakes the Yale Environment Review makes a good point</p><blockquote>“changes in habitat, sounds, and vibrations, all of which influence reproductive patterns and survivability” <cite>Yale Environment Review</cite></blockquote>
      <blockquote>“The available science suggests that the detrimental effects on fish are mostly local and confined to the construction phase. Many fish species avoid areas of construction activity, especially during pile-driving. In one case, pile-driving noise during construction reduced herring numbers, which in turn affected reproduction of a sea bird that relied on the herring for prey. In addition, sediments will be disturbed and associated contaminants may be released when submarine electric cables are buried beneath the lakebed.” <cite>Michigan Sea Grant</cite></blockquote>
    `,
    },
    {
      title: "Community Impact",
      image: "https://marcuslemonis.com/wp-content/uploads/2020/09/hands-of-businesses-helping-community-600x600.jpg", // Replace with relevant image URL
      description: `
      <p>Offshore wind projects can revitalize local economies by creating jobs, driving innovation, and fostering sustainable development. These initiatives also strengthen energy independence and security for the region.<p>
      <p>US Department of Energy lists out a few positives to wind projects -</p>
      <blockquote>"Wind-power creates good paying jobs, wind turbine service technicians are the fastest growing U.S. job of the decade. Wind power benefits local communities, Wind projects deliver an estimated $2 billion in state and local tax payments and land-lease payments each year. Communities that develop wind energy can use the extra revenue to put towards school budgets, reduce the tax burden on homeowners, and address local infrastructure projects. <cite>US Department of Energy</cite></blockquote>
    `,
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
            <Typography     
              variant="body1"
              component="div"
              dangerouslySetInnerHTML={{ __html: section.description }}
            />
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