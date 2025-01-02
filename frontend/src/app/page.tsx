'use client';

import React from "react";
import MotivationGear from "../components/motivation-gear";
import {Box, CssBaseline, AppBar, Toolbar, Typography, Button, Icon} from "@mui/material";
import {Lightbulb} from "@mui/icons-material";
import theme from "@/theme";
// import MenuIcon from "@mui/icons-material/Menu";


// ToDo: Create a list of items for the motivation-crate components
// Todo: Create a component
// ToDo: Create a mapper to render the crates

// display motivation crate

export default function Home() {

  const [motivators, setMotivators] = React.useState<string[]>([]);

  function displayCrate() {
    setMotivators((prev: string[]) => [...prev, "crate"]);
  }

  return (

    <Box>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
              variant="h6"
              component='div'
          >
              Motivation Machine
          </Typography>
        </Toolbar>
      </AppBar>
        <Box component='main' sx={{ p: 3 }}>
            <Toolbar />

            <Box
                sx={{borderRadius: 2, bgcolor: theme.palette.mode === 'dark' ? 'warning.dark' : 'warning.light', p: 2, display: 'flex', mb: 2 }}
            >
                <Icon>
                    <Lightbulb color={"warning"} />
                </Icon>
                <Typography variant='h6' sx={{ ml: 2 }}>Under construction</Typography>
            </Box>

            <Button variant="contained" onClick={displayCrate}>Get Motivated</Button>

              {motivators.map((motivator, index) => (
                  <MotivationGear key={index} index={index} motivator={motivator} />
              ))}
        </Box>
    </Box>
  );
}
