import * as React from 'react';

import {Typography} from '@mui/material';
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




function CaseDetails({allMatters,trackIndex}) {

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
  const drawerWidth = 240;

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginRight: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));




  console.log(thisMatter);
  console.log(id);

  if(thisMatter && milestones){
    return(
   <>
   
     <Box >
      <CssBaseline />
      <AppBar position="fixed" >
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
          <h3 className='milestoneHeader'>Milestones</h3>
          <ul className='milestones-list'>
            <Paper>
           {displayMilestones}
           </Paper>
          </ul>
        </div>

    
   
    <div className='Calendar' >
      <Calendar />
    </div>
   
    </>
      
    
 
    )
  }
  

  
  }


export default CaseDetails;