import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {
    console.log(props)
    const {imageprop}=props;
 return(
    <div>
        {
            imageprop.map((element)=>{
               return <img src={element.img} />

            })
        }

    </div>
 )
}

export default App