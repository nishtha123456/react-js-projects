import React, { useState } from 'react'
//import { Link } from 'react-router-dom'

export default function Invoice() {

  const[Customers,setCustomers]=useState([])
  let users=[{id:1,name:"Abc1",price:15,Quantity:2},
  {id:2,name:"Abc2",price:15,Quantity:1},
  {id:3,name:"Abc3",price:15,Quantity:3},
  {id:3,name:"Abc3",price:10,Quantity:3}
]
let sum=0;
{ users.map(user=>sum=sum + user.price * user.Quantity)}
//setCustomers(users)
    return (
  
    <>
    <header><center><h1>INVOICE</h1></center></header>
    <nav >
         

   <li><button onClick={()=>{window.print()}}>PRINT</button></li>
   

<li>   <button
      href="http:\\localhost:3000/Invoice" color="transparent"
      target="C:\\Users\pc4"
      download>Download
 </button>
</li>
    
<li > EMAIL</li>  
    

</nav>
<main>
  <table  style={{'width':'500px','height':'auto'}}>
    <tr><th>sr no</th>
    <th>name</th>
    <th>Price</th>
    <th>Quantity</th>
    <th>Amount</th>
    </tr>
    {users.map(user=><tr style={{'textAlign':'center'}}> 
    
      <td>
{user.id} 
      </td>
      <td>
{user.name} 
      </td>
      <td>
{user.price}
      </td>
      <td>
      {user.Quantity}
      </td>
      <td>
      {user.price * user.Quantity}

      </td>
     
    </tr>
    )}

    <tr style={{'textAlign':'right','fontWeight':'bold'}}>
      <td></td>
<td></td>
<td></td>
<td >Total Amount :</td>

<td style={{'textAlign':'center'}}>
  {sum}
</td>
    </tr>
  </table>
</main>


    </>
  )
}
