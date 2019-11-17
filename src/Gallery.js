import React, { Component } from 'react'
import axios from 'axios'
import { Divider, Image, button } from 'semantic-ui-react'
import './Gallery.css';
import { Link } from 'react-router-dom';

const url = 'https://api.themoviedb.org/3/discover/movie?api_key=a214f1703108f450b2e37f5e1d9dacf7&language=en-US&page='
const baseUrl = 'http://image.tmdb.org/t/p/w185/';

class Gallery extends Component
{
  constructor() {
    super();

    this.state = {
      query: '',
      actual : [],
      results: [],
      genres : [],
      elems : [],
      idx : 0
    };
  }
  componentWillMount(){
    // let nurl = `${url}${this.state.id}?api_key=${apikey}`
      axios.get(`${url}1`).then((response) => {
          this.setState({actual: response.data.results});
      })
      axios.get(`${url}2`).then((response) => {
          this.setState({actual: this.state.actual.concat(response.data.results)});
      })
      axios.get(`${url}3`).then((response) => {
          this.setState({actual: this.state.actual.concat(response.data.results)});
      })
      axios.get(`${url}4`).then((response) => {
          this.setState({actual: this.state.actual.concat(response.data.results)});
      })
      axios.get(`${url}5`).then((response) => {
          this.setState({actual: this.state.actual.concat(response.data.results)});
      })
      axios.get(`${url}6`).then((response) => {
          this.setState({actual: this.state.actual.concat(response.data.results)});
      })
      axios.get(`${url}7`).then((response) => {
          this.setState({actual: this.state.actual.concat(response.data.results)});
      })
      axios.get(`${url}8`).then((response) => {
          this.setState({actual: this.state.actual.concat(response.data.results)});
      })
      axios.get(`${url}9`).then((response) => {
          this.setState({actual: this.state.actual.concat(response.data.results)});
      })
      axios.get(`${url}10`).then((response) => {
          this.setState({actual: this.state.actual.concat(response.data.results)});
          this.setState({results: this.state.actual});
      })
  }
  FilterAction = () => {
    let temp = this.state.actual;
    this.setState({
      results : temp.filter(r => (r.genre_ids.includes(28)))
    });
  }
  FilterAdventure = () => {
    let temp = this.state.actual;
    this.setState({
      results : temp.filter(r => (r.genre_ids.includes(12)))
    });
  }
  FilterComedy = () => {
    let temp = this.state.actual;
    this.setState({
      results : temp.filter(r => (r.genre_ids.includes(35)))
    });
  }
  FilterDrama = () => {
    let temp = this.state.actual;
    this.setState({
      results : temp.filter(r => (r.genre_ids.includes(18)))
    });
  }
  FilterHorror = () => {
    let temp = this.state.actual;
    this.setState({
      results : temp.filter(r => (r.genre_ids.includes(27)))
    });
  }
  FilterFantasy = () => {
    this.state.genres.push(14);
    this.FilterFinal();
  }
  FilterNone = () => {

    this.setState({
      results : this.state.actual,
      genres : []
    });
  }

  FilterFinal = () =>{
    let temp = this.state.actual;
    this.setState({
      results : temp.filter(r => (
        this.state.genres.filter(x =>(
        r.genre_ids.includes(x)))
      ))
    });
  }
    render(){
      let temparr = this.state.results;
    const options = this.state.results.map((r, index) => (
      <Link key={r.id} to={{pathname : process.env.PUBLIC_URL+"/DepthView/" + r.id,
        state: {
            elems: temparr,
            idx : index
              }
      }}>
        <Image className="GalImg" key={r.id} src = {baseUrl+r.poster_path}/></Link>
    ))
    // const options=<Image src = {baseUrl+this.state.results.poster_path}/>
    return (<div className='GalleryContainer'><br></br>  <Link to = {process.env.PUBLIC_URL+'/'}><button className="ui left floated button">ListView</button></Link>
    <h1 className='HeaderGall'> Most Popular Movies </h1>
    <div className="gall">
    <div className="buttons">
    <button className="ui inverted red button" onClick={this.FilterAction}>Action</button>
    <button className="ui inverted orange button" onClick={this.FilterAdventure}>Adventure</button>
    <button className="ui inverted yellow button"onClick={this.FilterComedy}>Comedy</button>
    <button className="ui inverted olive button" onClick={this.FilterHorror}>Horror</button>
    <button className="ui inverted green button" onClick={this.FilterDrama}>Drama</button>
    <button className="ui inverted blue button" onClick={this.FilterFantasy}>Fantasy</button>
    <button className="ui inverted violet button" onClick={this.FilterNone}>None</button>
    </div>
    <br></br>
    <Image.Group size='small'>{options}</Image.Group>
    </div></div>)
    }
}

export default Gallery
