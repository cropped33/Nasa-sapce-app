import React from 'react'
import React, { useState } from 'react';
import * as tf from '@tensorflow/tfjs';


// Import your TensorFlow.js model here
import { loadModel } from './your-model-directory';

const loadprediction = () => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const handleLatitudeChange = (event) => {
        setLatitude(event.target.value);
      };
      
      const handleLongitudeChange = (event) => {
        setLongitude(event.target.value);
      };

      const handlePredict = async () => {
        // Convert latitude and longitude to TensorFlow.js tensor
        const input = tf.tensor2d([[parseFloat(latitude), parseFloat(longitude)]]);
      
        // Load your model
        const model = await loadModel();
      
        // Perform inference
        const result = model.predict(input);
      
        // Do something with the result (e.g., display it)
        console.log('Prediction:', result.dataSync());
      };
  return (
    <div>
    <input
      type="text"
      placeholder="Latitude"
      value={latitude}
      onChange={handleLatitudeChange}
    />
    <input
      type="text"
      placeholder="Longitude"
      value={longitude}
      onChange={handleLongitudeChange}
    />
    <button onClick={handlePredict}>Predict</button>
  </div>
  )
}

export default loadprediction