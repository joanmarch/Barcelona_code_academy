import React from 'react';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import FlipMove from 'react-flip-move';
import './App.css';
import ImageGallery from 'react-image-gallery'
import { Carousel } from 'react-responsive-carousel';


class App extends React.Component{
 
  render() {
    return (
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
  /* constructor(){
    super()
    this.state = {
      currentImage: 0
    }
    this.imagesArray= [
      "https://www.barcelonacodeschool.com/static/barcelona_code_school_campus_-9.63e7bb06.jpg",
      "https://www.barcelonacodeschool.com/static/barcelona_code_school_campus_-3.2d880113.jpg",
      "https://www.barcelonacodeschool.com/static/barcelona_code_school_campus_.c19bc11b.jpg",
      "https://www.barcelonacodeschool.com/static/barcelona_code_school_campus_-4.b8d73ac0.jpg"
    ]
    this.switchTime = 4000;
    this.switchImage();
  }


   switchImage =() =>{ setInterval(() => {
    let newImage = this.state.currentImage;
    newImage += 1;
    if (newImage==this.imagesArray.length){
     newImage=0;
    }else {}
    this.setState({currentImage : newImage });
  }, this.switchTime);


} 

  handleNext = () =>{
    let newImage = this.state.currentImage;
    newImage += 1;
    if (newImage==this.imagesArray.length){
     newImage=0;
    }else {}
    this.setState({currentImage : newImage });
    clearInterval(this.switchImage);
    
  }

  handlePrevious = () => {
    let newImage = this.state.currentImage;
    newImage -= 1;
    if (newImage<0){
     newImage=this.imagesArray.length-1;
    }else {}
    this.setState({currentImage : newImage });
  }

  render(){
   
    return(
      <FlipMove>
      <div className="wrapper">
      <img src = {this.imagesArray[this.state.currentImage]}></img>
      <button className="leftButton" onClick={this.handleNext}> NEXT IMAGE</button>
      <button className="rightButton" onClick={this.handlePrevious}>PREVIOUS IMAGE</button>
      </div>
      </FlipMove>
    )
  } */
}
export default App;

