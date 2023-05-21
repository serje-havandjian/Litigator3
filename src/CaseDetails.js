import * as React from 'react';

import {Typography} from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { styled } from '@mui/material/styles';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Calendar from './Calendar';

import Box from '@mui/material/Box';

import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import CssBaseline from '@mui/material/CssBaseline';




function CaseDetails({allMatters,trackIndex}) {

  const history = useHistory()

  const goHome = () => {
    // setTrackIndex(parseInt(index.target.id));
    history.push(`/`);


  };

  const { id } = useParams()

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

  if(thisMatter){
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

 
      <h3 className='milestones'>Milestones</h3>
    
   
    <div className='Calendar' >
      
        <Calendar />
      
    </div>
   
    </>
      
    
 
    )
  }
  

  
  }


export default CaseDetails;