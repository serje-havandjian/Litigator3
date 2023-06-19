import * as React from 'react';

import {Typography} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { styled } from '@mui/material/styles';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Paper from '@mui/material/Paper';
import Calendar from './Calendar';
import MuiDrawer from '@mui/material/Drawer';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';

import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SearchIcon from '@mui/icons-material/Search';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import BalanceIcon from '@mui/icons-material/Balance';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import CssBaseline from '@mui/material/CssBaseline';


import {query, collection, getDocs, getDoc} from 'firebase/firestore'

import {db} from "./firebase"





const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: '30%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));


function CaseDetails({allMatters,trackIndex}) {
  const theme = useTheme();
  const history = useHistory()
  const { id } = useParams()
  const [open, setOpen] = React.useState(false);

  const [test, setTest] = useState()



const thisMatter = allMatters.find((matter) => matter.id === id);
console.log(thisMatter, "This Matter")


const handleDrawerClose = () => {
  setOpen(false);
};

const handleDrawerOpen = () => {
  setOpen(true);
};

const goHome = () => {
  history.push(`/`);
  window.location.reload() 
};


  console.log(allMatters, "all matters in details")
  

  useEffect(() => {

  },[])
  
  if (thisMatter && thisMatter.Deadlines) {
    const displayDeadlines = thisMatter.Deadlines.map((deadline) => {
    
      return deadline.Milestones.map((milestone) => {
        const displayEachM = milestone.Milestones.map((m) => {
          return (
            <>
            <FormGroup>
              <FormControlLabel control={<Checkbox/>} label={m}>

              </FormControlLabel>
            
            </FormGroup>
            </>
          )
          
        });
        return (
          <div >
            <Box sx={{ flexGrow: 1, p: 2 }}>
              <div className='milestones-list'>
                <Paper>
                  <div className='milestoneCard'>
                    <h3>{milestone.Title}</h3>
                    {displayEachM}
                  </div>
                </Paper>
              </div>
            </Box>
          </div>
        );
      });
    });
  
  
    

    return(

      

      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', p: 1 }}>
      <>
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                height: 1,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
              </IconButton>
            <div >
              <Typography onClick={goHome}>
              {thisMatter.title}
              </Typography>
            </div>
            <Search className='searchBar'>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <div className='copilotHeader'>
              <Typography variant="h4">
              copilot
              </Typography>
            </div>
            </Toolbar>
          </AppBar>
        <Drawer variant="permanent" open={open}>
        <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Calendar', 'Matters'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <CalendarMonthIcon /> : <BalanceIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        </Drawer>

        <Box className='milestones-container' sx={{flexGrow:1}}>
        {displayDeadlines}
        {/* {displayDeadlines}
        {displayDeadlines}
        {displayDeadlines} */}
        </Box>
   
        <Box className='Calendar Cal2' >
          <Calendar />
        </Box>
      </>
 
    </Box>
    )

  }else if (thisMatter){
    return(
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p:1 }}>
        <>
            <CssBaseline />
            <Box>
            <AppBar position="fixed" open={open}>
              <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  height: 1,
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
                </IconButton>
              <div className='matterDetailsHeader'>
                <Typography onClick={goHome}>
                {thisMatter.title}
                </Typography>
              </div>
              <Search className='searchBar'>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            <div className='copilotHeader'>
              <Typography variant="h4">
              copilot
              </Typography>
            </div>
            </Toolbar>
            </AppBar>
          </Box>
  
          <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {['Calendar', 'Matters'].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {index % 2 === 0 ? <CalendarMonthIcon /> : <BalanceIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          </Drawer>
          <Box className='Calendar Cal2' >
            <Calendar />
          </Box>
        </>
   
      </Box>
    )
  }
  

  
  }


export default CaseDetails;