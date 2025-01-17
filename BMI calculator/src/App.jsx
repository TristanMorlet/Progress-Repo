import React from 'react'
import Forms from "./components/Forms"
import Output from './components/Output'
import {useState} from 'react'
import './App.css'

export default function App() {
  
  const [bmi, setBmi] = useState(null)

  function handleCalculation(weight, height) {

    if (!weight || !height){
      alert("Both fields are required!");
      console.log("Validation failed: Empty fields");
      return;
    }

    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    console.log(heightNum)
    if (isNaN(weightNum) || isNaN(heightNum)){
      alert("Please enter valid numbers!");
      console.log("Validation failed: Non-numeric input")
      return;
    }
  

    const bmiVal = (weight / (height * height)).toFixed(2); //toFixed method turns value into string and arguement is number of decimal places
    console.log(bmiVal);
    setBmi(bmiVal);
  }
  
  
  
  
  
  
  
  return (
    <div>
      <h1>BMI Calculator</h1>
      <div className="forms">
        <Forms onCalculate={handleCalculation}/> 
        <br />
        <Output bmi={bmi}/>
      </div>
    </div>
  )
}
