import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';

import  {db, storage} from "./firebase"
import {addDoc, collection } from "firebase/firestore"

export default function AddMatter() {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const [matterTitle, setMatterTitle ] = React.useState()
  const [trialDate, setTrialDate ] = React.useState()


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

  console.log(matterTitle)
  console.log(trialDate)

  const handleCreateMatter = async (e) => {
    e.preventDefault()
    await addDoc(collection(db,'matters'), {
      title:matterTitle,
      trialDate: trialDate
    })

    console.log("test")
  }


  return (
    <div>
        <ListItem disablePadding sx={{ display: 'block' }} primary={"Create Matter"} >
            <AddIcon onClick={toggleDrawer(true)} />
        </ListItem>
        <Drawer
        className='bottomDrawer'
        anchor="bottom"
        open={state.bottom}
        onClose={toggleDrawer(false)}
        >
        
            {list}
        
            <Paper className='drawerContainer' >
                <div className='drawerContent'>
                    <h3>Add Matter</h3>
                    <TextField onChange={ e => setMatterTitle(e.target.value)} className='drawerFields' id="outlined-basic" label="Matter Name" variant="outlined"/>
                    <br></br>
                    <br></br>
                    <TextField onChange={ e => setTrialDate(e.target.value)} className='drawerFields' id="outlined-basic" label="Other Fields" variant="outlined" />
                    <br></br>
                    <br></br>
                    <Button onClick={handleCreateMatter}>Submit</Button>
                </div>
            </Paper>
                    
    
        
        </Drawer>
    </div>
  );
}
