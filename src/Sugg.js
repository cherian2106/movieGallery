import React, { Component } from 'react'
import './Sugg.css';
import DepthView from './DepthView';
import { Link } from 'react-router-dom';

class Sugg extends Component
{
  constructor(props){
    super(props)
    this.state = {
      elems : this.props.value,
      idx : 0
    }
  }
    render(){
      // if(this.state.values){
      const options = this.props.value.map((r, index) => (
      <Link key={r.id} to={{pathname : process.env.PUBLIC_URL+"/DepthView/" + r.id,
        state: {
            elems: this.props.value,
            idx : index
              }
      }}>
      <div className = "list">
      <li className="elem" key={r.id}>
        {r.title}
      </li>
      </div>
      </Link>
    ))
    return <div className="cont"><br></br><ul>{options}</ul></div>
    // }
  }
}

export default Sugg

// <DepthView poster={r.poster_path} title={r.title} date={r.release_date} desc={r.overview} vote={r.vote_average}
//   />

// to={{
//     pathname: "/courses",
//     search: "?sort=name",
//     hash: "#the-hash",
//     state: { fromDashboard: true }
//   }}
