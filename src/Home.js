import { useState } from "react";
import { useEffect } from "react";
import { Snackbar } from '@mui/material';
import ResponsiveDrawer from "./Drawer";
import React from 'react'
import Calendar from "./Calendar";








function Home({allMatters, setAllMatters, handleMatterDetail}) {
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
        <ResponsiveDrawer allMatters={allMatters} setAllMatters={setAllMatters} handleMatterDetail={handleMatterDetail} >
        </ResponsiveDrawer>
       </>
    ) 


    
  }
  
export default Home;