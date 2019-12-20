import React, { Component } from 'react';
//import bubbleChart from './d3helpers.js'
import barChart from './d3helpers.js'

export default class Viz extends Component {      // Used to Partition React & D3 --> Not Necessary Here Because No User Interaction ?
                                                  // Each D3 Data Viz have own Class here to export at bottom into Controller


  componentDidMount() {
   	//bubbleChart(this.props)
    barChart(this.props)
  }

  componentDidUpdate(prevProps){
    //bubbleChart(this.props)
    barChart(this.props)
  }

  //compoentWillUnmount() {
    //barChart(this.props)
  //}


   render() {
     return (
       <div className="viz" />
     )
   }
}

