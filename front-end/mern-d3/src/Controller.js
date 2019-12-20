import React, { Component } from 'react';
import Viz from './Viz.js'




export default class Controller extends Component {
  
  render() {
    return(
      <div className="controller">
        {/*{ this.state.toDraw.length ? <Viz shapes={this.state.toDraw}/> : null}*/}
           <Viz />
      </div>
    )
  }
}








/*
export default class Controller extends Component {


  state = {
	  color: "", 
	  //width: "",
    centerX: "",
    centerY: "",
    radius: "",
	  toDraw: [], 
	}


  onSubmit = (evt) => {
  	evt.preventDefault(); 
  	const newShape = {
  	   color: this.state.color, 
  	   //width: this.state.width,
       centerX: this.state.centerX,
       centerY: this.state.centerY,
       radius: this.state.radius,
  	}
    console.log("newShape", newShape)
    this.setState({ toDraw: [...this.state.toDraw, newShape]})
  } 

  onChange = (evt) => {
  	this.setState({[evt.target.name]: evt.target.value})
  }



  render() {
    return(

        <div className="controller">

        <form onSubmit={this.onSubmit}>
        
        <label htmlFor="colorSelect">pick a color:</label>
        <select id="colorSelect" name="color" onChange={this.onChange} value={this.state.color||"default"}>
          <option disabled value="default">choose</option>
          <option value="red">red</option>
          <option value="orange">orange</option>
          <option value="yellow">yellow</option>
        </select>
        <label htmlFor="centerXSelect">pick a center x:</label>
        <select id="centerXSelect" name="centerX" onChange={this.onChange} value={this.state.centerX||"default"}>
          <option disabled value="default">choose</option>
          <option value="10">10</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <label htmlFor="centerYSelect">pick a center y:</label>
        <select id="centerYSelect" name="centerY" onChange={this.onChange} value={this.state.centerY||"default"}>
          <option disabled value="default">choose</option>
          <option value="10">10</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <label htmlFor="radiusSelect">pick a radius:</label>
        <select id="radiusSelect" name="radius" onChange={this.onChange} value={this.state.radius||"default"}>
          <option disabled value="default">choose</option>
          <option value="10">10</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>

        <button type="submit">draw!</button>

        </form>
        { this.state.toDraw.length ? <Viz shapes={this.state.toDraw}/> : null}
      </div>

    )
  }
}
*/



