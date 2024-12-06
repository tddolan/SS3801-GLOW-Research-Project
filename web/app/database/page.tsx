"use client";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, Divider, IconButton, Stack, Typography } from "@mui/material";
import { data } from "./database-entries";
import { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LaunchIcon from '@mui/icons-material/Launch';
import { useRouter } from "next/navigation";

export default function Info() {
  const [expanded, setExpanded] = useState<number>(-1);
  const router = useRouter();
  const toggleOpen = (index: number) => setExpanded(expanded === index ? -1 : index);
  return (
    <Box justifyItems="center">
      <Stack direction="column" alignItems="center" width="60rem" spacing={2}>
        <Typography variant="h3">GLOW Database</Typography>
        <Typography>This page contains many useful sources on Great Lakes offshore wind. Click the <InfoOutlinedIcon color="primary" fontSize="small"/> icon for a description of the source.</Typography>
        <Divider flexItem />
        <Box>
          {data.map((entry, index) => (
            <Accordion key={index} expanded={expanded === index} onChange={() =>toggleOpen(index)}>
              <AccordionSummary>
                <Stack flex={1} direction="row" justifyContent="space-between">
                  <Box>
                    <Typography variant="h6" noWrap width="45rem">
                      {entry.title}
                    </Typography>
                    <Typography>By: {entry.author}</Typography>
                  </Box>
                  <Box>
                    <IconButton color="primary" onClick={() => toggleOpen(index)} sx={{ marginRight: 2 }}>
                      {expanded === index ? <InfoIcon /> : <InfoOutlinedIcon />}
                    </IconButton>
                    <Button variant="outlined" endIcon={<LaunchIcon />} onClick={() => router.push(entry.link)}>visit</Button>
                  </Box>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Stack direction="column">
                  <Typography>Description:</Typography>
                  <Typography variant="body2">{entry.description}</Typography>
                </Stack>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Stack>
    </Box>
  );
}
