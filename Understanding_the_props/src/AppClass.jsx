import React, { Component } from "react";
import "./App.css";

export default class AppClass extends Component {
  render() {
    let imagearr = this.props.imageprop;
    console.log(imagearr);

    return (
      <div>
        <h3 className="heading">Kalvium Gallery</h3>
    
        <div className="parent">
        
          {imagearr.map((image, index) => (
            <img key={index} src={image.img} alt={`Image ${index}`} />
          ))}
        </div>
      </div>
    );
  }
}