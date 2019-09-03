 import React from 'react';
import './App.css';
import ReactDOM from 'react-dom'; 
'use strict';


class AboutUs extends React.Component{
    render(){
        return (
            <h1>Render in ABOUTUS from React2!!!!!!!!!!!!!!</h1>
        )
    }

componentDidMount() {
    document.querySelectorAll('#campusPictures')
    .forEach(domContainer => {
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(<AboutUs />,domContainer);
    });
    }
}

ReactDOM.render(<AboutUs />, document.getElementById('campusPictures'));
