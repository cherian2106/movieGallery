import React, { Component } from 'react'
import axios from 'axios'
import Sugg from './Sugg';
import Button from './Button';
import './Search.css';
import { Link } from 'react-router-dom';

const baseUrl = 'https://api.themoviedb.org/3/search/movie';
const apikey = 'a214f1703108f450b2e37f5e1d9dacf7';
let asc = 1;
let title = 1;
let AscendingClassName = "ui left positive button"
let DescendingClassName = "ui left button"
let TitleClassName = "ui positive button"
let PopClassName = "ui button"
class Search extends Component
{
  constructor() {
    super();

    this.state = {
      pokemon: []
    };
  }
  handleChange = () =>
  {
     let url = `${baseUrl}?api_key=${apikey}&query=${this.search.value}`

     axios.get(url).then((response) => {

    if(title === 1)
    {
      if(asc === 1)
      {
          this.setState({pokemon: response.data.results.sort(function(a, b){
         return a.title === b.title ? 0 : +(a.title > b.title) || -1;})});
      }
      else
      {
        this.setState({pokemon: response.data.results.sort(function(a, b){
          return a.title === b.title ? 0 : +(a.title < b.title) || -1;})});
      }
    }
    else
    {
      if(asc === 1)
      {
          this.setState({pokemon: response.data.results.sort(function(a, b){
         return a.popularity === b.popularity ? 0 : +(a.popularity > b.popularity) || -1;})});
      }
      else
      {
        this.setState({pokemon: response.data.results.sort(function(a, b){
          return a.popularity === b.popularity ? 0 : +(a.popularity < b.popularity) || -1;})});
      }
    }
       // console.log(this.state.pokemon.title);

     }).catch((error) => {
      console.log(error);
    });

    if(this.search.value.length === 0)
    this.setState({pokemon : []})
}

  sortascending = () => {
    asc = 1;
    DescendingClassName = "ui left button";
    AscendingClassName = "ui left positive button";
    this.finsort();
  }

  sortdescending = () => {
    asc = 0;
    AscendingClassName = "ui left button";
    DescendingClassName = "ui left positive button"
    this.finsort();
  }

  sortbypopularity = () =>{
    PopClassName = "ui positive button";
    TitleClassName = "ui button";
    title = 0;
    this.finsort();
  }

  sortbytitle = () =>{
    PopClassName = "ui button";
    TitleClassName = "ui positive button";
    title = 1;
    this.finsort();
  }

finsort = () =>{
    if(title === 1)
    {
      if(asc === 1)
      {
        let temp = this.state.pokemon;
          this.setState({pokemon: temp.sort(function(a, b){
          return a.title === b.title ? 0 : +(a.title > b.title) || -1;
        })})
      }
      else
      {
        let temp = this.state.pokemon;
          this.setState({pokemon: temp.sort(function(a, b){
          return a.title === b.title ? 0 : +(a.title < b.title) || -1;
        })})
      }
    }

    else
    {
      if(asc === 1)
      {
        let temp = this.state.pokemon;
          this.setState({pokemon: temp.sort(function(a, b){
          return a.popularity === b.popularity ? 0 : +(a.popularity > b.popularity) || -1;
        })})
      }
      else
      {
        let temp = this.state.pokemon;
          this.setState({pokemon: temp.sort(function(a, b){
          return a.popularity === b.popularity ? 0 : +(a.popularity < b.popularity) || -1;
        })})
      }
    }
  }


  render()
  {
    return(<div className="ContainSearch"><Link to = {process.env.PUBLIC_URL+'/Gallery'}><button className = "ui left floated button">Gallery</button></Link>
      <div className="TempContain">
          <br></br>
          <label className = "Search_Label">Movie Search</label>
            <input
            className = "Search"
            placeholder="Search for Movies here..."
            type="text"
            name="Search Bar"
            ref={input => this.search = input}
            onChange ={this.handleChange}
            />
      </div>
      <div className = "Container">
        <br></br>
      <button className={AscendingClassName} onClick={this.sortascending}>Ascending</button>
      <button className={DescendingClassName} onClick={this.sortdescending}>Descending</button>
      <button className={TitleClassName} onClick={this.sortbytitle}>Sort By Title</button>
      <button className={PopClassName} onClick={this.sortbypopularity}>Sort by Popularity</button>
      </div>
        <Sugg value = {this.state.pokemon}/>
      </div>
    );
  }
}

export default Search;
