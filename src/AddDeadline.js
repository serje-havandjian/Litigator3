import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Autocomplete from '@mui/material/Autocomplete'
import { useEffect } from "react";
import {query, collection, getDocs, getDoc, doc} from 'firebase/firestore'

import {db} from "./firebase"


export default function AddDeadline() {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const [deadlines, setDeadlines] = useState()
  const [deadlineOptions, setDeadlineOptions] = useState()

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, bottom: open });
  };

  const list = (
    <Box
      sx={{ width: 250, height: 100 }}
      role="presentation"
    >
    </Box>
  );

  const handleAddDeadline = () =>{
    console.log("test")
  }


  useEffect(() => {
    const fetchData = async () => {
      const list = [];
      const q = query(collection(db, 'Deadlines'));
      const querySnapshot = await getDocs(q);
      
      querySnapshot.forEach((doc) => {
        const deadlineData = doc.data();
        const deadline = { id: doc.id, ...deadlineData };
        list.push(deadline);
      });
  
      setDeadlines(list)
    };
  
    fetchData();
  }, []);
  
  console.log(deadlines)

  if(deadlines){
    const deadlineOps = deadlines.map((deadline)=>{
      return(
        deadline.Title
      )
    })


    return (
      <div>
        <Button onClick={toggleDrawer(true)}>Add Deadline</Button>
        <Drawer
          className='bottomDrawer'
          anchor="bottom"
          open={state.bottom}
          onClose={toggleDrawer(false)}
        >
          {list}
        
          <Paper className='drawerContainer' >
              <div className='drawerContent'>
                  <h3>Add Deadline</h3>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={deadlineOps}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Deadlines" />}
                  />
                  <br></br>
                  <br></br>
                  <TextField className='drawerFields' id="outlined-basic" label="Trigger Date" variant="outlined" />
                  <br></br>
                  <br></br>
                  <Button onClick={handleAddDeadline}>Submit</Button>
              </div>
          </Paper>
                   
   
       
        </Drawer>
      </div>
    );
    
    
    
  }



  


}
