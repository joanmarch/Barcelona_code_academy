import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';


class AboutUs extends React.Component{
    render(){
        return (
            <h1>Render in ABOUTUS from React2!!!!!!!!!!!!!!</h1>
        )
    }
}

ReactDOM.render(<AboutUs />, document.getElementById('dropDownAboutus'));
