import * as React from 'react';
import {Box} from '@mui/material';
import {Typography} from '@mui/material';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Button} from '@mui/material';
import { useHistory } from "react-router-dom";

import AddDeadline from './AddDeadline';
import CaseDetails from './CaseDetails';



function Matter({allMatters,setAllMatters, handleMatterDetail}) {


  
  const [hoverIndex, setHoverIndex] = useState(null);

  

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

 

    // Redirect to MatterDetail page passing the matter index as a parameter
   



  
  useEffect(()=>{
    fetch("http://localhost:8000/")
    .then(result => result.json())
    .then(res => setAllMatters(res) )
  }, [])


    const displayAllMatters = allMatters.map((matter, index)=>{
    const backgroundColor = hoverIndex === index ? 'caseDetailsHover' : 'caseDetails';

    return(
      <>
      <div className='Accordian' >
          <Paper onClick={handleMatterDetail}>
            <Accordion >
              <AccordionSummary>
                <div id={index}  className={backgroundColor}  
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}>
                    <Box sx={{
                      p: 1,
                      m: 1,
                      color:'gray',
                      '&:hover': {
                        color:'black',
                        textDecoration: 'underline',
                        textDecorationColor: 'gray',
                      }
                      }} >
                      <Typography color={'blue'} >
                        
                        Title: {matter.title}
                       
                      </Typography> 
                    </Box>
                    <Box sx={{
                      p: 1,
                      m: 1,
                      color:'gray',
                      '&:hover': {
                        color:'black',
                        textDecoration: 'underline',
                        textDecorationColor: 'gray',
                      }
                      }} >
                      <Typography>
                        Opposing Counsel: {matter.opposingCounsels.map((counsel)=>{
                          return(
                            <>
                            {counsel.name}
                            </>
                          )
                        })}
                      </Typography> 
                    </Box>
                    <Box sx={{
                      p: 1,
                      m: 1,
                      color:'gray',
                      '&:hover': {
                        color:'black',
                        textDecoration: 'underline',
                        textDecorationColor: 'gray',
                      }
                      }} >
                      <Typography>
                      <Typography> Jurisdiction: {matter.jurisdiction.name}</Typography>
                      </Typography> 
                    </Box>
                  </div>  
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    <div className="addDeadline">
                      <AddDeadline />
                    </div>
                    
                  </AccordionDetails>
              </Accordion>
          </Paper>
    </div>
    </>
    )
  })

    return(
      <>
      <div className='matterContainer'>
      {displayAllMatters}
      </div>
     
      </>
    )
  }


export default Matter;