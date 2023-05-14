import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function AddDeadline() {
  const [state, setState] = React.useState({
    bottom: false,
  });

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
      
      <Box className='drawerContainer'>
        <h3>Add Deadline</h3>
      
        <TextField className='drawerFields' id="outlined-basic" label="Trigger" variant="outlined"/>
        <br></br>
        <br></br>
        <TextField className='drawerFields' id="outlined-basic" label="Trigger Date" variant="outlined" />
      </Box>
     
      </Drawer>
    </div>
  );
}
