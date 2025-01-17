import React from 'react'
import {useState} from 'react'
import "./Forms.css"

export default function Forms( {onCalculate} ) {

    const [kgInput, setKgInput] = useState("")
    const [meterInput, setMeterInput] = useState("")
    
    function handleSubmit(e) {
        e.preventDefault()

        onCalculate(kgInput, meterInput);
    }
    return (
    <div className="wrapper">
        <form onSubmit = {handleSubmit} className="mainform">
          <label htmlFor="kg">What is your weight in kg:</label> <br/>
          <input 
            type="text" 
            id="kg" 
            name="kg" 
            placeholder="text here"
            value={kgInput}
            onChange={(e) => setKgInput(e.target.value)}
          /> <br/>
          <label htmlFor="meters">What is your height in meters:</label> <br/>
          <input 
            type="text" 
            id="meters" 
            name="meters"
            placeholder="text here" 
            value={meterInput}
            onChange={(e) => setMeterInput(e.target.value)}
          /> <br />
          <button type="submit" > Calculate </button>
        </form>
    </div>
  )
}
