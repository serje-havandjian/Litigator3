import { useState } from "react";
import { useEffect } from "react";
import { Snackbar } from '@mui/material';
import ResponsiveDrawer from "./Drawer";
import React from 'react'
import Calendar from "./Calendar";








function Home() {
const [open, setOpen] = useState();



  //Button & Snackbar
  const handleClick = () => {
      setOpen(true);
    };
  const handleClose = () =>{
      setOpen(false)
  }


    return(
       <>
       <div className="Calendar">
        <Calendar />
        </div>
        <ResponsiveDrawer >
        </ResponsiveDrawer>
        

        <h1 onClick={handleClick} className="Header">Test</h1>
        <Snackbar
          open={open}
          onClick={handleClick}
          onClose={handleClose}
          autoHideDuration={6000}
          message="Note archived"
        />
       </>
    ) 


    
  }
  
export default Home;