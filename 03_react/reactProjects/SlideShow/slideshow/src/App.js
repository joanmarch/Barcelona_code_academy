import React from 'react';
import FlipMove from 'react-flip-move';
import './App.css';


class App extends React.Component{
  constructor(){
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

  looperImages = () => {        
    return (this.state.imagesArray.map((elem, i)=>(
        setTimeout(switchImage(){
          
        })
        <SingleMovie index = {i} key = {i} movie = {elem[0].Title} expandMovie={this.props.expandMovie} ></SingleMovie>
        {this.props.state.movieList[i][1].expand? <ExpandMovie movieData = {elem[0]}></ExpandMovie> : null}
        
       ))
    )   
  }

  /* switchImage =() =>{ setInterval(() => {
    let newImage = this.state.currentImage;
    newImage += 1;
    if (newImage==this.imagesArray.length){
     newImage=0;
    }else {}
    this.setState({currentImage : newImage });
  }, this.switchTime);
} */

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
  }
}
export default App;

