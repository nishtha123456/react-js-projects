import React from "react";
import {useNavigate} from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ResumeTamplates ()
{
const Navigate=useNavigate();
    return(
      <>
        <div className="tamplates">
        
                 
          <h1 ><i>Resume Tamplates</i></h1>
                   
            <p>  <h3>  Pick a resume template, fill it out, and format. Create a professional resume in a few clicks. Just choose one of following resume templates below, add ready-made content, download, and get the job.

            </h3></p>
            <Stack spacing={2} direction="row" style={{'margin-top':'15vh'}}>
        <img  style={{'margin-left':'10vw','height':'200px','width':'150px'}} src="https://tse3.mm.bing.net/th?id=OIP.tuMuTGZTBCk1QcOB0PcE0QHaKs&pid=Api&P=0" />
        <img  style={{'height':'200px','width':'150px'}} src="https://tse3.mm.bing.net/th?id=OIP.tuMuTGZTBCk1QcOB0PcE0QHaKs&pid=Api&P=0" />
        <img  style={{'height':'200px','width':'150px'}} src="https://tse3.mm.bing.net/th?id=OIP.tuMuTGZTBCk1QcOB0PcE0QHaKs&pid=Api&P=0" />
        <img  style={{'height':'200px','width':'150px'}} src="https://tse3.mm.bing.net/th?id=OIP.tuMuTGZTBCk1QcOB0PcE0QHaKs&pid=Api&P=0" />
        <img  style={{'height':'200px','width':'150px'}} src="https://tse3.mm.bing.net/th?id=OIP.tuMuTGZTBCk1QcOB0PcE0QHaKs&pid=Api&P=0" />
        <img  style={{'height':'200px','width':'150px'}} src="https://tse3.mm.bing.net/th?id=OIP.tuMuTGZTBCk1QcOB0PcE0QHaKs&pid=Api&P=0" />
        <img  style={{'height':'200px','width':'150px'}} src="https://tse3.mm.bing.net/th?id=OIP.tuMuTGZTBCk1QcOB0PcE0QHaKs&pid=Api&P=0" />
       
        
        </Stack>
    
       
        <Stack spacing={2} direction="row">
      <Button variant="contained" style={{'margin-left':'10vw','height':'30px','width':'150px'}} onClick={()=>{Navigate('./FillInfo')}}>Template1</Button>
      <Button variant="contained" style={{'height':'30px','width':'150px'}}  onClick={()=>{Navigate('./Template2')}}>Template2</Button>
      <Button variant="contained" style={{'height':'30px','width':'150px'}}>Template3</Button>
      <Button variant="contained" style={{'height':'30px','width':'150px'}}>Template3</Button>
      <Button variant="contained" style={{'height':'30px','width':'150px'}}>Template3</Button>
      <Button variant="contained" style={{'height':'30px','width':'150px'}}>Template3</Button>
      <Button variant="contained" style={{'height':'30px','width':'150px'}}>Template3</Button>
    
    </Stack>

      

    <ul style={{'backgroundColor':'blue', 'marginTop':'150px'}} >
      <li>  © 2022   ALRIGHTS REVERED	</li>				
    </ul>
    </div>
    
    
     </>
    );
}

   

