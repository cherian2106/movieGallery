import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import './DepthView.css';

const baseUrl = 'http://image.tmdb.org/t/p/w185/';
const apikey = 'a214f1703108f450b2e37f5e1d9dacf7';
const url = 'https://api.themoviedb.org/3/movie/';
class DepthView extends Component
{
  constructor(props){
    super(props)
    this.state={
      id : props.match.params.id,
      elems : [],
      idx : 0
    }
  }

  componentWillMount(){
      this.setState({
        elems : this.props.location.state.elems
      })

      if(this.props.location.state.idx<0)
      this.setState({
        idx : this.props.location.state.elems.length-1
      });
      else if(this.props.location.state.idx>=this.props.location.state.elems.length)
      this.setState({
        idx : 0
      });
      else
      this.setState({
        idx : this.props.location.state.idx
      });
  }

  componentWillReceiveProps(nextProps){
      this.setState({
        id : nextProps.match.params.id,
        elems : nextProps.location.state.elems,
      });
      if(nextProps.location.state.idx<0)
      this.setState({
        idx : nextProps.location.state.elems.length-1
      });
      else if(nextProps.location.state.idx>=nextProps.location.state.elems.length)
      this.setState({
        idx : 0
      });
      else
      this.setState({
        idx : nextProps.location.state.idx
      });
    }

  render() {
    // console.log(this.props.location.state.idx);
    let posterurl = baseUrl + this.state.elems[this.state.idx].poster_path;
    let Linktonext = process.env.PUBLIC_URL+"/DepthView/"+this.state.elems[this.state.idx+1].id;
return(
  <div className="CardContainer">
  <div className="ui centered card">
    <Card>
      <Image src =  {posterurl}/>
      <Card.Content>
        <Card.Header>{this.state.elems[this.state.idx].title}</Card.Header>
        <Card.Meta>
          <span className='date'>Release Date : {this.state.elems[this.state.idx].release_date}</span>
        </Card.Meta>
        <Card.Description>{this.state.elems[this.state.idx].overview}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <p>
          <Icon name='user' />
          Popularity : {this.state.elems[this.state.idx].vote_average}
        </p>
      </Card.Content>
    </Card>
    </div>

    <Link to={
      {pathname : Linktonext,
       state : {
          elems : this.props.location.state.elems,
          idx : this.props.location.state.idx-1
              }
     }}>
    <button>PREV</button>
    </Link>

    <Link to={process.env.PUBLIC_URL+'/'}><button className="ui button">Back To ListView</button></Link>
    <Link to={process.env.PUBLIC_URL+'/Gallery'}><button className="ui button">Back To Gallery</button></Link>

    <Link to={
      {pathname : Linktonext,
       state : {
          elems : this.props.location.state.elems,
          idx : this.props.location.state.idx+1
              }
     }}>
    <button>NEXT</button>
    </Link>

</div>
    )
  }
}
export default DepthView

/*<Link to={'/DepthView/'+this.state.id}><button onClick={this.inc}>Next</button></Link>*/
