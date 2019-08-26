import React from 'react';
import './style.css';


class RegisterForm extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["emailid"] = "";
          fields["password"] = "";
          fields["confirmPassword"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
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
          
      } 

    }

    checkIsEmail(email){
        let n = email.indexOf("@");
        let from = email.substring(n+1,email.length);
        let aux = from.indexOf(".")
        let result = from.substring(0,aux)
        return !((result == "gmail") || (result == "yahoo"))
    }

    validateForm() {

      let fields = this.state.fields;
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
    <div id="main-registration-container">
     <div id="register">
        <h3>Registration page</h3>
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        {/* <label>Name</label>
        <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.username}</div> */}
        <label>Email ID:</label>
        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.emailid}</div>
        <label>Password:</label>
        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.password}</div>
        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" value={this.state.fields.confirmPassword} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.confirmPassword}</div>
        <input type="submit" className="button"  value="Register"/>
        </form>
    </div>
</div>

      );
  }


}


export default RegisterForm;