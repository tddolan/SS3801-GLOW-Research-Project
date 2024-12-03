"use client";
import { Box, Button, Divider, Link, Stack, Step, StepLabel, Stepper, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Briefing, MinShoreDist, TurbineType } from "./interactive-model-form";
import { useState } from "react";
import { InteractiveModelData } from "../types/interactive-model-data";

export default function InteractiveModelPage() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [formData, setFormData] = useState<InteractiveModelData>({ minShoreDist: 0, tubineType: 0, minBirdDist: 0 });

  const backButtonHandler = () => {
    setCurrentPage(currentPage - 1);
  }
  const briefingNextButtonHandler = () => {
    setCurrentPage(currentPage + 1);
  };
  const minShoreDistNextButtonHandler = (value: number) => {
    setCurrentPage(currentPage + 1);
    setFormData({ ...formData, minShoreDist: value });
  };
  const turbineTypeNextButtonHandler = (value: number) => {
    setCurrentPage(currentPage + 1);
    setFormData({ ...formData, tubineType: value });
  };

  const formPages = [<Briefing nextPage={briefingNextButtonHandler} />, <MinShoreDist nextPage={minShoreDistNextButtonHandler} />, <TurbineType nextPage={turbineTypeNextButtonHandler} prevPage={backButtonHandler}/>];
  return (
    <Stack direction={"column"} spacing={2} alignItems="center">
      {currentPage < formPages.length ? formPages[currentPage] : formPages[0]}
      {currentPage > 0 ? (
        <Box width={"32rem"}>
          <Stepper activeStep={currentPage - 1}>
            <Step key={0}>
              <StepLabel />
            </Step>
            <Step key={1}>
              <StepLabel />
            </Step>
            <Step key={3}>
              <StepLabel />
            </Step>
          </Stepper>
        </Box>
      ) : (
        <></>
      )}
    </Stack>
  );
}
