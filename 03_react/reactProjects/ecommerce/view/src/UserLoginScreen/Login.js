import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Axios from 'axios';
import UploadScreen from '../EcommerceMainScreen/UploadScreen';
const bcrypt = require('bcryptjs');
class Login extends Component {
constructor(props){
  super(props);
  this.state={
  email:'',
  password:''
  }
 }

 async handleClick(event){
     var payload={
    "email":this.state.email,
    "password":this.state.password
    }
   try{
     let response = await Axios.post ('http://localhost:3001/user/login', payload)
     if(response.data.code == 200){
      let hash = response.data.data.password;
      try{
        let aux= this.props.appContext
        await bcrypt.compare(payload.password, hash, function(err, res) {
          if (res){
            console.log("Login successfull");
            var uploadScreen=[];
            uploadScreen.push(<UploadScreen appContext={aux}/>)
            aux.setState({loginPage:[],uploadScreen:uploadScreen})
          }else{
            console.log("Username password do not match");
            alert("username password do not match");
          }
         });
      }catch(error){
          console.log(error);
      }
      }else if (response.data.code == 205){
          alert("Email not existing");
        }
        else{
        console.log("Username does not exists");
        alert("Username does not exist");
        }
   }
   catch(error){
     console.log(error);
   }
    } 

render() {
    
    return (
      <div>
        <MuiThemeProvider>
          <div>
          {/* <AppBar
             title="Login"
           /> */}
           <TextField
             hintText="Enter your Email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;