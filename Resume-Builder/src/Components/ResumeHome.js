import React from "react";
import Box from '@mui/material/Box'
import './ResumeHome.css'

export default function ResumeHome()
{
  return(

    <>
    <div>
    <Box className="section1" id="section1id">
            <div className="box1" id="boxid1">
                <span >Resume Builder</span>
            </div>
        </Box>

        <Box className="section2">
            <div className="s2con">
                <h1 className="head1" id="headid1">
                   Resumes
                </h1>
                <p className="section2P1" id="section2P1ID">
                Each resume template is expertly designed and follows the exact “resume rules” hiring managers look for. Stand out and get hired faster with field-tested resume templates </p>
            </div>
        </Box>

        <Box className="section3">
            <div className="s3con">
                <h1 className="head2" id="headid2">
                   Cover Letter
                </h1>
                
                Stand out and get hired faster with our collection of free professional cover letter templates expertly-designed to land you the perfect position
            </div>
    
     </Box>   

    </div>
    </>
  )

}