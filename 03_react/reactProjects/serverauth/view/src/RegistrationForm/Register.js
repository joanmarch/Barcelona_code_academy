import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import './style.css';
import Login from '../LoginForm/Login';

var CryptoJS = require("crypto-js");
/* const bcrypt = require('bcrypt');
const saltRounds = 10; */


class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      confirmPassword:'',
      errors : {}
    }
  }

  async submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
        let fields = {};
        fields["emailid"] = "";
        fields["password"] = "";
        fields["confirmPassword"] = "";
        this.setState({fields:fields});
        /* bcrypt.hash(this.state.password, saltRounds, async (err, hash) => {
          if(!err){ */
          let encryptedpass = CryptoJS.AES.encrypt(this.state.password, this.state.email);
          
          encryptedpass = CryptoJS.SHA3(this.state.email);
          console.log("+++++++++++++++++++++++"+encryptedpass)
          console.log(typeof(encryptedpass));
          
          let decryptedpass = CryptoJS.AES.decrypt(encryptedpass.toString(), this.state.email);
          decryptedpass = decryptedpass.toString(CryptoJS.enc.Utf8);
          debugger
            try{
              var payload={
                "email":this.state.email,
                "password":encryptedpass
                }
              let response = await axios.post('http://localhost:3001/user/add', payload)
              console.log(response);
              alert("Form submitted");
              if(response.data.code == 200){
                 console.log("registration successfull");
                 var loginscreen=[];
                 loginscreen.push(<Login parentContext={this}/>);
                 var loginmessage = "Not Registered yet.Go to registration";
                 this.props.parentContext.setState({loginscreen:loginscreen,
                 loginmessage:loginmessage,
                 buttonLabel:"Register",
                 isLogin:true
                 });
                }
            }
            catch(error){
              console.log(error)
            }
          /*} else{
            console.log(err)
          } */
        };
           };
        
       
        /* var apiBaseUrl = "http://localhost:4000/api/";
        console.log("values",this.state.first_name,this.state.last_name,this.state.email,this.state.password);
        //To be done:check for empty values before hitting submit
        var self = this;
        var payload={
        "first_name": this.state.first_name,
        "last_name":this.state.last_name,
        "email":this.state.email,
        "password":this.state.password
        }
        axios.post(apiBaseUrl+'/register', payload)
       .then(function (response) {
         console.log(response);
         if(response.data.code == 200){
          //  console.log("registration successfull");
           var loginscreen=[];
           loginscreen.push(<Login parentContext={this}/>);
           var loginmessage = "Not Registered yet.Go to registration";
           self.props.parentContext.setState({loginscreen:loginscreen,
           loginmessage:loginmessage,
           buttonLabel:"Register",
           isLogin:true
            });
         }
       })
       .catch(function (error) {
         console.log(error);
       });
      } */
        

  checkIsEmail(email){
    let n = email.indexOf("@");
    let from = email.substring(n+1,email.length);
    let aux = from.indexOf(".")
    let result = from.substring(0,aux)
    return !((result == "gmail") || (result == "yahoo"))
}

  validateForm() {

    let fields = {
        emailid : this.state.email,
        password : this.state.password,
        confirmPassword : this.state.confirmPassword
    }
    let errors = {};
    let formIsValid = true;

  
    if (!fields["emailid"] || fields["emailid"]=="") {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
      else if (this.checkIsEmail(fields["emailid"])){
        formIsValid = false;
        errors["emailid"] = "*Only Gmail and Yahoo emails are accepted";
      }
    }
       
    if (!fields["password"] || fields["password"]=="") {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if ((typeof fields["password"] !== "undefined") && (fields["password"] !=="")) {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password. The password must be at least of 8 characters, including one lowercase letter, one uppercase letter and one number.";
      }
    }

    if (!fields["confirmPassword"]) {
      formIsValid = false;
      errors["confirmPassword"] = "*Please enter your confirmation password.";
    }

    if (typeof fields["confirmPassword"] !== "undefined") {
      if (fields["password"] !== fields["confirmPassword"]) {
        formIsValid = false;
        errors["confirmPassword"] = "*The accepted values for the Password and Confirm password must be identical.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;

  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
           />
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
             <div className="errorMsg">{this.state.errors.emailid}</div>
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
             <div className="errorMsg">{this.state.errors.password}</div>
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Confirmation Password"
             floatingLabelText="Confirmation Password"
             onChange = {(event,newValue) => this.setState({confirmPassword:newValue})}
             />
             <div className="errorMsg">{this.state.errors.confirmPassword}</div>
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.submituserRegistrationForm(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Register;