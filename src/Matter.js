import * as React from 'react';
import {Box} from '@mui/material';
import {Typography} from '@mui/material';
import { useState, useEffect } from 'react';


function Matter() {

  const [allMatters, setAllMatters] = useState([])
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handleMatterDetail = (e) =>{
    console.log(e.target.id)
  }

  
  useEffect(()=>{
    fetch("http://localhost:8000/")
    .then(result => result.json())
    .then(res => setAllMatters(res) )
  }, [])


    const displayAllMatters = allMatters.map((matter, index)=>{
    const backgroundColor = hoverIndex === index ? 'caseDetailsHover' : 'caseDetails';

    return(
      <>
      <div>
          <div id={index} onClick={handleMatterDetail} className={backgroundColor}  
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
                <Typography>
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
                  Jurisdiction: {matter.jurisdiction.name}
                </Typography> 
              </Box>
        </div>
      </div>
      </>
    )
  })

    return(
      <div className='matterContainer'>
      {displayAllMatters}
      </div>
    )
  }


export default Matter;