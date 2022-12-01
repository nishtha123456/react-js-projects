import React from 'react'

export default function Login() {
  return (
    <>
    <div>
        <center>
      <form action='/Home.js' style={{'border':'2px solid black' ,'margin':'10px','padding':'20px','height':'350px','width':'500px','textAlign':'left','backgroundColor':'cyan'}}>
     <center> <h1><u>LOGIN FORM</u></h1></center>
      
      <center> <label for='name' style={{'width':'50px'} }/> Name:<input type='text'/><br/><br/>
        Age:<input type='number'/><br/><br/>
        Gender:
  <input type="radio" id="html" name="fav_language" value="Male"/>
  <label for="html">Male</label>
  <input type="radio" id="css"  value="Female"/>
  <label for="css">Female</label><br/><br/>
<label for="birthday">Birthday:</label>
  <input type="date" id="birthday" /><br/><br/>
  
  
<label for="country">Choose a country:</label>

<select id="country">
  <option value="volvo">INDIA</option>
  <option value="saab">USA</option>
  <option value="opel">DUBAI</option>
  <option value="audi">AMERICA</option>
</select><br/><br/></center>
  <center><input type='submit' value='submit'/></center>


      </form>
      <iframe src='about.js'title='about'></iframe>
      </center>
    </div>
    </>
  )
}
