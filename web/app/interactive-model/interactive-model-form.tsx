"use client";
import { Box, Button, Divider, Input, Link, Radio, Slider, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useState } from "react";

export function Briefing(props: { nextPage: () => void }) {
  return (
    <Stack direction={"column"} padding={2} spacing={2} width="60rem" alignItems="center">
      <Typography variant="h3" justifySelf="center">
        Interactive Model
      </Typography>
      <Divider flexItem />
      <Typography>
        On this page you will make a series of policy choices which will determine the maximum energy potential of wind power on the great lakes. For more
        information about the consequences of your choices and why they are controversial, we recommend reading through the <Link href="/info">Info page</Link>.
      </Typography>
      <Divider flexItem />
      <Button variant="contained" onClick={props.nextPage} endIcon={<ArrowForwardIcon />}>
        Begin
        
      </Button>
    </Stack>
  );
}

export function MinShoreDist(props: { nextPage: (value: number) => void }) {
  const [value, setValue] = useState<number>(0);
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === "" ? 0 : Number(event.target.value));
  };
  const handleBlur = () => {
    if (value < 0) {
      setValue(20);
    } else if (value > 20) {
      setValue(20);
    }
  };
  return (
    <Stack direction={"column"} padding={2} spacing={2} width="60rem" alignItems="center" height="30rem">
      <Typography variant="h3" justifySelf="center">
        Minimum Distance from Shore
      </Typography>
      <Divider flexItem />
      <Typography>
        Choose the minimum distance from the shoreline in kilometers that all tubines must stay beyond. A larger number will decrease the usable area but will
        likely garner more support from landowners and recreational lake users.
      </Typography>
      <Stack direction={"row"} width={"32rem"} spacing={2} flex={1} alignItems={"center"}>
        <Typography noWrap width={"12rem"}>Distance (km):</Typography>
        <Slider value={typeof value === "number" ? value : 0} valueLabelDisplay="auto" max={20} step={0.5} onChange={handleSliderChange} />
        <Input
          value={value}
          size="small"
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            step: 0.5,
            min: 0,
            max: 20,
            type: "number",
          }}
        />
      </Stack>
      <Divider flexItem />
      <Stack direction={"row"} spacing={16}>
        <Button variant="contained" disabled startIcon={<ChevronLeftIcon />}>
          Back
        </Button>
        <Button variant="contained" endIcon={<ChevronRightIcon/>} onClick={() => props.nextPage(value)}>
          Next
        </Button>
      </Stack>
    </Stack>
  );
}

export function TurbineType(props: { nextPage: (value: number) => void, prevPage: () => void }) {
  const [value, setValue] = useState<number>(0);
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === "" ? 0 : Number(event.target.value));
  };
  const handleBlur = () => {
    if (value < 0) {
      setValue(20);
    } else if (value > 20) {
      setValue(20);
    }
  };
  return (
    <Stack direction={"column"} padding={2} spacing={2} width="60rem" alignItems="center" height="30rem">
      <Typography variant="h3" justifySelf="center">
        Turbine Maximum Depth
      </Typography>
      <Divider flexItem />
      <Typography>
        Choose the minimum distance from the shoreline in kilometers that all tubines must stay beyond. A larger number will decrease the usable area but would
        likely be more popular among landowners and recreational lake users.
      </Typography>
      <Stack direction={"row"} width={"25rem"} spacing={2} flex={1} alignItems={"center"} justifyContent="space-around">
      <Radio
        checked={value === 0}
        onChange={(e) => setValue(Number.parseInt(e.target.value))}
        value={0}
      />
      <Radio
        checked={value === 1}
        onChange={(e) => setValue(Number.parseInt(e.target.value))}
        value={1}
      />
      </Stack>
      <Divider flexItem />
      <Stack direction={"row"} spacing={16}>
        <Button variant="contained" startIcon={<ChevronLeftIcon />} onClick={props.prevPage}>
          Back
        </Button>
        <Button variant="contained" endIcon={<ChevronRightIcon/>} onClick={() => props.nextPage(value)}>
          Next
        </Button>
      </Stack>
    </Stack>
  );
}