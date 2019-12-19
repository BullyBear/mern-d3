import React, { Component } from 'react';
//import bubbleChart from './d3helpers.js'
import barChart from './d3helpers.js'

export default class Viz extends Component {      // Used to Partition React & D3 --> Not Necessary Here Because No User Interaction


  componentDidMount() {
   	//bubbleChart(this.props)
    barChart(this.props)
   }

   componentDidUpdate(prevProps){
    //bubbleChart(this.props)
    barChart(this.props)
     }


   render() {
     return (
       <div className="viz" />
     )
   }
}

