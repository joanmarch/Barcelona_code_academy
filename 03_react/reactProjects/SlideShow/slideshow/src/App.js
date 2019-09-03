'use strict';
/* import React from 'react';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import FlipMove from 'react-flip-move';
import './App.css';
import ImageGallery from 'react-image-gallery'
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom'; */

const e = React.createElement;

class App extends React.Component{
 
  render() {
    return e(
      <div className="wrapper">
        <Carousel autoPlay={true} transitionTime={500} infiniteLoop={true}>
            <div>
                <img src="https://www.barcelonacodeschool.com/static/barcelona_code_school_campus_-9.63e7bb06.jpg" />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <img src="https://www.barcelonacodeschool.com/static/barcelona_code_school_campus_-3.2d880113.jpg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="https://www.barcelonacodeschool.com/static/barcelona_code_school_campus_.c19bc11b.jpg" />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src="https://www.barcelonacodeschool.com/static/barcelona_code_school_campus_-4.b8d73ac0.jpg" />
                <p className="legend">Legend 4</p>
            </div>
        </Carousel>
      </div>
    );
}
  
}
ReactDOM.render(e(App), document.querySelector('#campusPictures'));
/* const domContainer = document.querySelector('#campusPictures');
ReactDOM.render(e(LikeButton), domContainer);
export default App; */

