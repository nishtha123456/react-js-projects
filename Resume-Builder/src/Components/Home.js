import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
export default function Home() {
  const[state,setstate]=useState(false)
  const showDropdown=()=>{
    setstate(true);

  }
  const hideDropdown=()=>{
    setstate(false);

  }
  return (
    <div className='drop-down'>
      <div className='drop-down-list' onMouseEnter={showDropdown} onMouseLeave={hideDropdown} >
Drop Down list
{state ?(
<ul>
  <li><Link to="Branch">Branch</Link></li>
  <li>2nd value</li>
  <li>3rd value</li>
  <li>4th value</li>

</ul>):null}
  </div>

    </div>
     )
}
