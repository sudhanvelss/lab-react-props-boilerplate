import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";
const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data
}
export default class AppClass extends Component{
  render() {
    const image = imageData()

    return (

      <div>
          <h3>Kalvium Gallery</h3>
          <div id='parent'>
            {image.map(element => {
              return <div>
                <img src={element.img} alt="image" />
              </div>
            })}
          </div>
        
      </div>
     
    )
  
  }

  
  
}