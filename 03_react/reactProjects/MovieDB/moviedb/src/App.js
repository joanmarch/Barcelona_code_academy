import React from 'react';
import './App.css';
import InputMovie from './InputMovie'
import axios from 'axios';
import DisplayList from './DisplayList';

class App extends React.Component{
  state={
    newSearch : "",
    movieList : [],
    loading : false,
    error : "",
  }

  handleIconClick = (movie) =>{  
    let newSearch = movie;
    this.setState ({loading : true});
    this.findMovie(newSearch);
    this.state.loading = false; 
  }

  findMovie = async (newSearch) => {
    console.log(newSearch);
    let url = `https://omdbapi.com/?t=${newSearch}&apikey=thewdb`;
    try{
      const res = await axios.get(url);
      let {Title, Released, Director, Poster, Runtime, Genre, Plot, Ratings} = res.data;
      let newMovie =[{Title, Released, Director, Poster, Runtime, Genre, Plot, Ratings}, {expand:false}] ;
      this.state.movieList.push(newMovie);
      if (this.state.movieList.length >= 10){
        this.state.movieList.splice(0,1);
      } else{}
      this.setState(this.state);    
    }catch (error){
      this.setState({error:error});
    }
  }

  expandMovie = (index) => {
    this.state.movieList[index][1].expand = !this.state.movieList[index][1].expand;
    this.setState(this.state);
  }

  
  render(){
    return(
    <div>
    <InputMovie handleIconClick = {this.handleIconClick}></InputMovie>
    <DisplayList state = {this.state} expandMovie = {this.expandMovie}></DisplayList>
    </div>
    )
  }
}

export default App;
