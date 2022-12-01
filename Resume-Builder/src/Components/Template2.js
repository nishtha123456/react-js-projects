import React from 'react';
import axios from 'axios';

class User extends React.Component {
  state = {
    fname: '',
    lname:''
  }
 
  handleChange = event => {
    this.setState({ fname: event.target.value });
  }
 handleLname=event=>{
  this.setState({lname:event.target.value})
 }
  handleSubmit = event => {
    event.preventDefault();
 
    const user = {
      fname: this.state.fname,
      lname:this.state.lname
    };
 
    axios.post(`http://localhost:5000/`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
 
  render() {
    return (
      <div>
        <form style={{'height':'500px','alignItems':'center'}}onSubmit={this.handleSubmit}>
          <br/><br/>
          <label>
            First Name:
            <input type="text" name="fname" onChange={this.handleChange} />
          </label>
<br/>
<br/>
          <label>
           Last Name:
            <input type="text" name="lname" onChange={this.handleLname} />
          </label>

          <button style={{'height':'50px','width':'100px'}} type="submit">Add</button>
        </form>
      </div>
    )
  }
}
 
export default User;