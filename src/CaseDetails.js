import * as React from 'react';
import {Box} from '@mui/material';
import {Typography} from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


function CaseDetails({allMatters,trackIndex}) {

  const { id } = useParams();

  const thisMatter = allMatters.find((matter) => matter.id === parseInt(id));


  console.log(thisMatter);

  if(thisMatter){
    return(
      <>
      {thisMatter.title}
      </>
 
    )
  }
  

  
  }


export default CaseDetails;