import './index.css';
import React, { useState } from 'react';

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState('cold')

  const increaseTemperature = () => {
    const newTemperature = temperatureValue +1

    if (newTemperature > 20) {
      setTemperatureColor('hot')
    }

    if (newTemperature < 15) {
      setTemperatureColor('cold')
    }
    if (newTemperature > 15 && newTemperature < 20){
      setTemperatureColor('neutral')
    }
    if (newTemperature > 30){
      alert('The temperature is too high, it can cause some bad things to your control, please, reduce it')
    }

    setTemperatureValue(newTemperature)
  }

  const decreaseTemperature = () => {
    const newTemperature = temperatureValue - 1

    if (newTemperature > 20) {
      setTemperatureColor('hot')
    }

    if (newTemperature < 15) {
      setTemperatureColor('cold')
    }
    if (newTemperature > 15 && newTemperature < 20){
      setTemperatureColor('neutral')
    }
    if (newTemperature < 10){
      alert('The temperature is too low, it can cause some bad things to your health, please, increase it')
    }


    setTemperatureValue(newTemperature)
  }

  return(
    <div className='app-container'>
      <div className='temperature-display-container'>
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className='button-container'>
        <button onClick={() => decreaseTemperature()}>-</button>
        <button onClick={() => increaseTemperature()}>+</button>
      </div>
    </div>
  )
}

export default App;
