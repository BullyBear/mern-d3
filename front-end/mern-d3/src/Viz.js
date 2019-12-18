import React, { Component } from 'react';
import draw from './d3helpers.js'


export default class Viz extends Component {

  componentDidMount() {
   	draw(this.props)
   }

   componentDidUpdate(prevProps){
       draw(this.props)
     }
   
   render() {
     return (
       <div className="viz" />
     )
   }
}

