import React from 'react'
import { Link } from 'react-router-dom'
//import { Link} from 'react-router-dom'
export default function Navbar() {
  return (
<>
       
<div className='navbar'>
   <ul >
   

      <li float="left"  role="presentation" class="active"><Link to="/Home">Home</Link></li>
   
   <li float="left" role="presentation"><Link to="/ResumeHome"> Resume</Link></li>
       
   <li float="left" role="presentation"><Link to="/"> Cover Letter</Link></li>  
   <li float="left" role="presentation"><Link to="/"> Invoice</Link></li>   
 </ul>
 </div>


    
    </>
    
  )
}
