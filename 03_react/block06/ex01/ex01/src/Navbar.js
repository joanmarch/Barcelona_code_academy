import React from "react";
import { NavLink } from "react-router-dom";
export default class NavBarComp extends React.Component {
  render() {
    let myVariable = "I am Joan!";
    let myUrl = "/contact/"+myVariable;
    return (
      <ul
        style={{
          height: "60px",
          background: "#ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          listStyle: "none"
        }}
      >
        <li>
          <NavLink exact to="/home" activeStyle={activeStyle}>
            Home
          </NavLink>
          {/* this takes us to the HOME page */}
        </li>
        <li>
          <NavLink exact to="/about" activeStyle={activeStyle}>
            About us
          </NavLink>
          {/* this takes us to the ABOUT page */}
        </li>
        <li>
          <NavLink exact to={myUrl} activeStyle={activeStyle}>
            Contact
          </NavLink>
          {/* this takes us to the ABOUT page */}
        </li>
        <li>
          <NavLink exact to="/gallery" activeStyle={activeStyle}>
            Gallery
          </NavLink>
          {/* this takes us to the ABOUT page */}
        </li>
      </ul>
    );
  }
}
let activeStyle = {
  color: "white"
};
