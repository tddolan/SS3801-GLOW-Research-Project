"use client";
import { Box, Button, Card, Divider, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Info() {
  const [page, setPage] = useState<number>(0);
  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);
  return (
    <Box justifyItems="center" padding={3}>
      <Stack direction="column" alignItems="center" width="60rem" spacing={2}>
        <Typography variant="h2">Discussion</Typography>
        <Card sx={{ backgroundColor: "background.default" }}>
          <Typography padding={2}>
            The debate over wind energy in the Great Lakes is not simply a question of feasablilty but rather a set of many competing interests and social
            pressures. In this section we will discuss a few different viewpoints and the different communities they represent.
          </Typography>
        </Card>
        <Divider sx={{ paddingBottom: 3 }} />
      </Stack>
      {page == 0 && (
        <Stack direction="column" alignItems="center" width="60rem" spacing={2}>
          <Divider flexItem />
          <Box width="60rem">
            <Typography variant="h4">Background</Typography>
          </Box>
          <Typography>
            Over the past few years the proposition of offshore wind farms in the Great Lakes has become the topic of much discussion and debate. There is a
            large potential for energy production from these offshore wind farms that could greatly benefit the states surrounding the Great Lakes. During our
            research, we have identified a few areas where this controversy around offshore wind highlights inequality in our society. There are several groups
            of people who suffer or benefit from Great Lakes offshore wind. On one side, the people living near proposed turbine sites would bear the brunt of
            the impact while people elsewhere reap the benefits of the new clean energy source. However, failure to implement clean energy puts additional
            pressure on communities most affected by the fossil fuel industry.
          </Typography>
          <Divider flexItem />
          <Button variant="contained" onClick={nextPage} endIcon={<ArrowForwardIcon />}>
            Page 2: Local Stance
          </Button>
        </Stack>
      )}
      {page == 1 && (
        <Stack direction="column" alignItems="center" width="60rem" spacing={2}>
          <Divider flexItem />
          <Box width="60rem">
            <Typography variant="h4">Local Stance</Typography>
          </Box>
          <Typography>
            The people who live along the Great Lakes tend to take a “Not in my backyard” stance and are against the building of these wind farms as it would
            obstruct the natural beauty, recreational, and economic use of the lakes. If the wind turbines are built it would potentially depreciate the value
            of their land on the lake shore and make living on one of the Great Lakes less desirable. The wind turbines would also have effects on aquatic life,
            which is an essential part of the Great Lakes Region. The wind turbines can cause alterations in the migration of the aquatic wildlife, stemming
            from “changes in habitat, sounds, and vibrations, all of which influence reproductive patterns and survivability” (Yale Environment Review).
          </Typography>
          <Divider flexItem />
          <Stack direction={"row"} spacing={2}>
            <Button color="inherit" variant="contained" onClick={prevPage} startIcon={<ArrowBackIcon />}>
              Page 1: Background
            </Button>
            <Button variant="contained" onClick={nextPage} endIcon={<ArrowForwardIcon />}>
              Page 3: Unheard Voices
            </Button>
          </Stack>
        </Stack>
      )}
      {page == 2 && (
        <Stack direction="column" alignItems="center" width="60rem" spacing={2}>
          <Divider flexItem />
          <Box width="60rem">
            <Typography variant="h4">Unheard Voices</Typography>
          </Box>
          <Typography>
            The people in the Great Lakes regions who are against the offshore wind farms have valid reasons to dispute it, however, their unwillingness to
            sacrifice some of their use of the lake is inadvertently harming people who live near sources of fossil fuel power such as coal plants. These plants
            are massive sources of pollution both in the atmosphere and the water but the people they affect often have little say over their construction. When
            people opt to fight the integration of large renewable energy projects such as offshore wind farms in the Great Lakes that means that more power
            needs to be generated using less environmentally friendly methods such as coal or natural gas. This promotes inequality for the people who are stuck
            living in these polluted areas while people along the Great Lakes are able to voice their concerns. To those living on the lakes, their reasons are
            completely valid for opposing the turbines. But those suffering from the fossil fuel industry, also have valid arguments for renewable power sources
            to be implemented. Both sides of the argument want to act in their own self interest; the difference is that one group has less influence which
            promotes inequality in their quality of life.
          </Typography>
          <Divider flexItem />
          <Stack direction={"row"} spacing={2}>
            <Button color="inherit" variant="contained" onClick={prevPage} startIcon={<ArrowBackIcon />}>
              Page 2: Local Stance
            </Button>
            <Button variant="contained" onClick={nextPage} endIcon={<ArrowForwardIcon />}>
              Page 4: Role of the Consumer
            </Button>
          </Stack>
        </Stack>
      )}
      {page == 3 && (
        <Stack direction="column" alignItems="center" width="60rem" spacing={2}>
          <Divider flexItem />
          <Box width="60rem">
            <Typography variant="h4">Role of the Consumer</Typography>
          </Box>
          <Typography>
            As consumers it is important that we pay attention to the large potential of the Great Lakes for energy production. We have an ever growing need for
            energy and why should we have to miss out on an opportunity that could help fulfill those consumption needs. Not only is this an opportunity to
            increase energy production in the Great Lakes Region it would also be clean energy production that would lower the need for fossil fuels or other
            forms of energy that are depleting and aren't renewable. For instance, the share of Michigan's total electricity generation from natural gas-fired
            plants increased from 12% in 2013 to 46% in 2023. Michigan produces 58,510 thousand metric tons of carbon dioxide emissions in the electric power
            industry, which is 3.5 percent of the total U.S. contribution in this area (U.S. Energy Information Administration, "Michigan"). The consumption of
            fossil fuels contributes heavily to climate change that affects all people across the world. Now as citizens we also need to look at not just the
            customer perspective, but also how this will affect the society and the environment. Previously stated it is no mystery that many people in society
            are against the idea of wind energy in the Great Lakes region for a plethora of reasons. People in society, specifically ones living on the lakes,
            do not want wind turbines obstructing the natural beauty of the lake. People are also not happy with the environmental degradation that comes with
            implementing a project like this and how harmful it can be to wildlife living within the region. Wind energy in the great lakes region can be viewed
            very differently based on a person's perspective. It is safe to say that whether this is implemented or not some people will be happy and some
            people will be upset. The question is are we willing to make sacrifices and if so at the cost of what group?
          </Typography>
          <Divider flexItem />
          <Button color="inherit" variant="contained" onClick={prevPage} startIcon={<ArrowBackIcon />}>
            Page 3: Unheard Voices
          </Button>
        </Stack>
      )}
    </Box>
  );
}
