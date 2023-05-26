import * as React from 'react';

import {Typography} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { styled } from '@mui/material/styles';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Paper from '@mui/material/Paper';
import Calendar from './Calendar';

import Box from '@mui/material/Box';

import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


import CssBaseline from '@mui/material/CssBaseline';


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginRight: 240,
    width: `calc(100% - ${240}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



function CaseDetails({allMatters,trackIndex}) {
  const theme = useTheme();
  const history = useHistory()
  const { id } = useParams()

  const [milestones, setMilestones] = useState()

  useEffect(() => {
    fetch("http://localhost:8000/milestones")
      .then((response) => response.json())
      .then((data) => setMilestones(data))
      .catch((error) => {
        console.error("Error fetching matters:", error);
      });

  }, []);

  console.log(milestones, "MILESTONES HERE")

  let displayMilestones

  if(milestones){
    displayMilestones = milestones.map((milestone)=>{
      return(
        
        <FormControlLabel control={<Checkbox defaultChecked />} label={milestone.title} />
      )
    })
  }
  

  const goHome = () => {
    history.push(`/`);
  };


  const thisMatter = allMatters.find((matter) => matter.id === parseInt(id));

  if(thisMatter && milestones){
    return(
    <Box sx={{ display: 'flex', justifyContent: 'space-between', p:1 }}>
   
      <DrawerHeader>

        
        <Box >
          <CssBaseline />
          <AppBar position="fixed">
            <Toolbar>
            <div className='matterDetailsHeader'>
              <Typography onClick={goHome}>
              {thisMatter.title}
              </Typography>
            </div>

          <div className='copilotHeader'>
            <Typography variant="h4">
            copilot
            </Typography>
          </div>
          </Toolbar>
          </AppBar>
        </Box>

        <div className='milestones-container'>
          <Box >
            <h3 className='milestoneHeader'>Milestones</h3>
            <ul className='milestones-list'>
              <Paper >
              <div className='milestoneCard'>
                <h3>Demurrer</h3>
                {displayMilestones}
              </div>           
            </Paper>
            <Paper>
            <div className='milestoneCard'>
                <h3>MSJ</h3>
                {displayMilestones}
              </div>
              </Paper>
              <Paper>
            <div className='milestoneCard'>
                <h3>MSJ</h3>
                {displayMilestones}
              </div>
              </Paper>
              <Paper>
            <div className='milestoneCard'>
                <h3>MSJ</h3>
                {displayMilestones}
              </div>
              </Paper>
            </ul>
            
          </Box>
        </div>
      
  
   
        <Box  className='Calendar Cal2' >
          <Calendar />
        </Box>
      </DrawerHeader>
 
    </Box>
      
    
 
    )
  }
  

  
  }


export default CaseDetails;