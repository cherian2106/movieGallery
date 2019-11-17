import React, { Component } from 'react'
import './Button.css';

class Button extends Component
{
render () {
    return (
      <button
        className="ui positive button"
        onClick={this.props.sortasc}>{this.props.label}</button>
    );
  }
}

  export default Button
