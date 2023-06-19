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
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import {db} from "./firebase"
import { queries } from '@testing-library/react';

import {query, collection, getDocs} from 'firebase/firestore'


function Matter({allMatters,setAllMatters, handleMatterDetail}) {

  console.log(allMatters, "ALL MATTERS HERE")
  
  const [hoverIndex, setHoverIndex] = useState(null);

  

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

 

    // Redirect to MatterDetail page passing the matter index as a parameter
   



  
  useEffect(()=>{
    const fetchData = async () => {
      let list = []
      const q = query(collection(db, 'matters'))
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc)=>{
        list.push({id: doc.id, ...doc.data() })
      })
      setAllMatters(list)
     
    }
    
    fetchData()
    
  }, [])


  let displayAllMatters

  if(allMatters){
     displayAllMatters = allMatters.map((matter)=>{
      
      const backgroundColor = hoverIndex === matter.id ? 'caseDetailsHover' : 'caseDetails';
      
      const handleDetailsClick = () => {
        handleMatterDetail(matter.id);
      };
  
      return(
        <>
        <div className='Accordian' >
            <Paper >
              <Accordion  >
                <AccordionSummary>
                  <div   className={backgroundColor}  
                      onMouseEnter={() => handleMouseEnter(matter.id)}
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
                        <Typography >
                          
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
                        {/* <Typography>
                          Opposing Counsel: {matter.opposingCounsels.map((counsel)=>{
                            return(
                              <>
                              {counsel.name}
                              </>
                            )
                          })}
                        </Typography>  */}
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
                        <Typography> Trial Date: {matter.trialDate}</Typography>
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
                   
                        <Button onClick={handleDetailsClick} >
                          DETAILS
                        </Button>
                
                    </AccordionDetails>
                </Accordion>
            </Paper>
      </div>
      </>
      )
    })
  }
  
  return(
    <>
    <div className='matterContainer'>
    {displayAllMatters}
    </div>
   
    </>
  )
    
  }


export default Matter;