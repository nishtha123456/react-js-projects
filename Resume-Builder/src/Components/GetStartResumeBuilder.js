import react from 'react'
import { useNavigate } from 'react-router-dom'
import Stack from '@mui/material/Stack';
export default function GetStartResumeBuilder (){
  const Navigate=useNavigate()
    return(

        <>
              
                <Stack spacing={2} direction="row" >
                    <div >  <span >
                        <h1 className="heading-primary " >Do you want an outsanding, yet simple and
                          professional templates for your resume/cv
                          and a matching cover letter? 
                        </h1>
                        <h2 className='para2'>                          We got you! In minutes, you can create a professionallooking resume / CV and make a compelling cover letter to
          accompany your resume.
          </h2>

                        <p className='para2' >
                          To keep your application extra memorable and leave a greater
                          impression on employers, pair each resume template with a
                          corresponding cover letter template.
                        </p>
          
                        <button className='button' onClick={()=>{Navigate('./ResumeTamplates')}}>Get started</button>
                                  
                                      
                                    
                        </span>
                        </div>
                        <div className='box2'>
</div>

</Stack>
        </>
    )
}