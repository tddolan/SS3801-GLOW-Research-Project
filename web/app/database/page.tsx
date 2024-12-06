"use client";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, Divider, IconButton, Pagination, Stack, Typography } from "@mui/material";
import { data } from "./database-entries";
import { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LaunchIcon from "@mui/icons-material/Launch";

export default function Info() {
  const [expanded, setExpanded] = useState<number>(-1);
  const [page, setPage] = useState<number>(1);
  const toggleOpen = (index: number) => setExpanded(expanded === index ? -1 : index);
  const pagedData = data.slice((page-1)*10, Math.min(page*10, data.length));
  return (
    <Box justifyItems="center" padding={3}>
      <Stack direction="column" alignItems="center" width="60rem" spacing={2}>
        <Typography variant="h3">GLOW Database</Typography>
        <Typography>
          This page contains many useful sources on Great Lakes offshore wind. Click the <InfoOutlinedIcon color="primary" fontSize="small" /> icon for a
          description of the source.
        </Typography>
        <Divider flexItem />
        <Box>
          {pagedData.map((entry, index) => (
            <Accordion key={index} expanded={expanded === index} onChange={() => toggleOpen(index)}>
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
                    <Button
                      variant="outlined"
                      endIcon={<LaunchIcon />}
                      onClick={(event) => {
                        event.stopPropagation(); // prevents clicks from triggering parent's onClick
                        window.open(entry.link);
                      }}
                    >
                      visit
                    </Button>
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
        <Pagination count={Math.ceil(data.length/10)} page={page} onChange={(event, value) => setPage(value)}/>
      </Stack>
    </Box>
  );
}
