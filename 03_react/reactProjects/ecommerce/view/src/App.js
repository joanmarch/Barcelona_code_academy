import React, { Component } from 'react';
import './App.css';
import Loginscreen from './UserLoginScreen/Loginscreen';
import UploadScreen from './EcommerceMainScreen/UploadScreen';

import AdminArea from './EcommerceMainScreen/Admin/AdminArea';




class App extends Component {
  constructor(){
    super();
    this.state={
      loginPage:[],
      uploadScreen:[],
      pageTitle:"Wellcome to our market"
    }
  }
/*   componentWillMount(){
    var loginPage =[];
    loginPage.push(<Loginscreen parentContext={this} key={"login-screen"}/>);
    this.setState({
                  loginPage:loginPage
                    })
  } */

  onClickAdmin=()=>{
    var loginPage=[];
    loginPage.push(<AdminArea parentContext={this}/>);
    this.setState({
                  loginPage:loginPage,
                  pageTitle:"Admin Area"
                    })
  }

  onClickMarket=()=>{
    var loginPage=[];
    loginPage.push(<UploadScreen />);
    this.setState({
                  loginPage:loginPage,
                  pageTitle:"to Area"
                    })
  }
  

  componentWillMount(){
    var loginPage =[];
    loginPage.push(<UploadScreen key={"login-screen"}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App">
        <div className="firstdiv">
             <div className="secdiv"> 
                 <button className="btn mybuttonicon"><i className="fa fa-bars"></i></button>
                 <h1 className = "abcd">{this.state.pageTitle}</h1>
                 <button className="btn mybuttontext" onClick={this.onClickAdmin}><span className="btn">Amind</span></button>
                 <button className="btn mybuttontext" onClick={this.onClickMarket}><span className="btn">Market</span></button>
              </div>                
        </div>      
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default App;
