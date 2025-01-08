'use client';

import React from "react";
import MotivationCrate from "../components/motivation-crate";
import MotivationGear from "../components/motivation-gear";
import {Box, CssBaseline, AppBar, Toolbar, Typography, Button, Icon} from "@mui/material";
import {Lightbulb} from "@mui/icons-material";
import theme from "@/theme";
import CategorySelector from "@/components/category-selector";


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
            <Box sx={{ display: 'flex', position: 'absolute', width: 1, ml:-3, height: {xs: 1, sm: 'unset'}, minHeight: {xs: 'unset', sm: 1} }}>
                <Box sx={{display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', width: 1}}>
                    <Box sx={{display: 'flex', flexDirection: 'row', overflow: 'hidden', width: 1}}>
                        <Box sx={{ flexGrow: 1}}></Box>
                        <Box sx={{ mt: -20 }} >
                            <MotivationGear key={1} index={1} motivator='' size='xlarge'/>
                        </Box>
                        <Box sx={{ flexGrow: 1}}>A</Box>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'row', overflow: 'hidden'}}>
                        <Box sx={{ display: 'block', ml: -15 }} >
                            <MotivationGear key={2} index={2} motivator='' size='large'/>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'row', overflow: 'hidden'}}>
                        <Box sx={{ flexGrow: 2 }}></Box>
                        <Box sx={{ mr: '200px' }} >
                            <MotivationGear key={3} index={1} motivator='' size='xlarge'/>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{display: { xs: 'flex', sm: 'none'}, flexDirection: 'column', height: 1, ml: '270px' }}>
                    <Box sx={{ display: 'block', flexGrow: 1}} ></Box>
                    <Box sx={{ display: 'block', ml: -15 }} >
                        <MotivationGear key={2} index={2} motivator='' size='large'/>
                    </Box>
                    <Box sx={{ display: 'block', flexGrow: 2}} ></Box>
                </Box>
            </Box>

            <Toolbar />

            <Box
                sx={{borderRadius: 2, bgcolor: theme.palette.mode === 'dark' ? 'warning.dark' : 'warning.light', p: 2, display: 'flex', mb: 2 }}
            >
                <Icon>
                    <Lightbulb color={"warning"} />
                </Icon>
                <Typography variant='h6' sx={{ ml: 2 }}>Under construction</Typography>
            </Box>

            <Box sx={{display: 'flex', justifyContent: 'space-between', mb: 2}}>

              <Box className='left-side' sx={{ display: { xs: 'none', sm: 'block' } }}>
                  <Typography variant='h6'>Visible</Typography>
              </Box>
              <CategorySelector categories={["Morning", "Afternoon", "Evening"]} />
            </Box>

            <Button variant="contained" onClick={displayCrate}>Get Motivated</Button>

            {motivators.map((motivator, index) => (
                <MotivationCrate key={motivator+index} />
            ))}
        </Box>
    </Box>
  );
}
