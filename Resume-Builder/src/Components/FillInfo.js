import React, { useState,useEffect } from 'react';
import './FillForm.css';

import Axios from 'axios';

export default function FillInfo() {
  const [customers,setCustomers]=useState([])
  const [firstname,setFirstname]=useState('')
  const [lastname,setLastname]=useState('')
  console.log(firstname +lastname)

  useEffect(()=>{
    Axios({
      method: "GET",
      url: "http://localhost:5000/",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res=>{console.log("Data fetched:",res.data.customers);});
    
  },[])
  
  const  addData=()=>{
    console.log("adddata called");
    const Data={firstname:firstname ,lastname:lastname}
    
    Axios({
      method: "POST",
      
      url: "http://localhost:5000/", 
      mode:"cors",
      data:Data,
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res =>{console.log("Data sent:");setCustomers(Data)});
   
    
   // setAuthers({authers: prev=>[...prev,res.data.authers]}) window.location.reload();

 
  }


  return (
    <>
    <div className='container'>
      
       
    <div >          <img  className='logo' src="https://tse3.mm.bing.net/th?id=OIP.9Y2Z_boZIHMlDDRJoaMVpQAAAA&pid=Api&P=0" alt="logo"/>
      </div>   
      <form>
            <h1 ><u>Fill Personal Information </u></h1>
   <label htmlFor="firstname">First Name :  </label>
<input type="text" id="fname" name="fname" onChange={(e)=>{setFirstname(e.target.value)}}/><br/>
<label htmlFor="lastname">Last Name:</label>
<input type="text" name="lname" onChange={(e)=>{setLastname(e.target.value)}}/ ><br/>
<label htmlFor="address">Address:</label>
<input type="textarea" name="addresss"/ ><br/>

<label htmlFor="gen">Gender &nbsp;&nbsp;&nbsp;&nbsp;:</label>
<input type="radio" name="gen" style={{'width': '20px'}}/>male 
<input type="radio" name="gen" style={{'width':'20px'}}/>female<br/>
<label htmlFor="city">City :</label><select name="city">
    <option value="Delhi" >Delhi</option>
    <option value="Ganddhinagar">Ganddhinagar</option>
    <option value="Ahmedabad">Ahmedabad</option>
</select><br/>
<label htmlFor='state'>State :</label><select name="state">
    <option value="Gujarat" >Gujarat</option>
    <option value="Panjab">Panjab</option>
    <option value="Maharastra">Maharastra</option>
</select><br/>

<label htmlFor="dob">dob &nbsp;&nbsp;</label><input type="date"/><br/><br/>
   
<button className='submit' onClick={addData} >Submit</button>

</form>
</div>
    </>
  );
}
