import React from 'react';
import './App.css';
import ImageData from './components/Datacomponent'; // Importing the function

function App() {
  const imageprop = ImageData(); // Calling the function to get the image data
  console.log(imageprop);

  return (
    <div>
        <h2>Kalvium Gallery</h2>
      {imageprop.map((element) => {
        return <img key={element.id} src={element.img} alt={`Image ${element.id}`} />;
      })}
    </div>
  );
}

export default App;
