import { Component } from "react";
import "./App.css"

export default class AppClass extends Component{
    render(){
        let imageArray = this.props.imageprop;
        console.log(imageArray)

        return(
            <div>
                <h3>Kalvium gallary</h3>
                <div className="pictures">
                    
                    {
                        imageArray.map((element,i)=>{
                            return <img key={i} src={element.img} />
                        })
                    }
                    
                </div>
            </div>
        )

    }
}