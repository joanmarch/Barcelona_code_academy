import React from 'react';
import Gallery from './Gallery'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import NavBar from './Navbar'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends React.Component{

  render(){
    return(
    <Router>
      <NavBar></NavBar>
      <Route path="/home" component ={Home}></Route>
      <Route path="/gallery" component={Gallery}></Route>
      <Route  path="/about" component ={About}></Route>
      <Route path="/contact/:data" component={Contact}></Route>
    </Router>
    )
  }
}

export default App