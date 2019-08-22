import React from 'react';


class Header extends React.Component {
  render(){
       
    return(
     <div className="nav-bar">
      <nav>
            <ul >
              <li><a href="#FREE STANDING">FREE STANDING</a></li>
              <li><a href="#ZEN">ZEN</a></li>
              <li><a href="#SHAPE">SHAPE</a></li>
              <li ><a href="#GEO">GEO</a></li>
              <li ><a href="#METAL">METAL AND MAGNETIC</a></li>
            </ul>
      </nav>
        <div className="clearfix"></div>
     </div>
    )
  }
}


export default Header;