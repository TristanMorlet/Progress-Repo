import React from 'react'
import { useState, useEffect } from 'react'
import "./Output.css"

export default function Output({bmi}) {
    const [customMessage, setCustomMessage] = useState("")
  
    function getMessage(bmi){
        if (bmi < 18.5){
           return "That is underweight."
        }
        else if (bmi < 25){
            return "That is a normal weight"
        }
        else if (bmi < 30){
            return "That is overweight"
        }
        else if (bmi < 35){
            return "That is Obese Class 1"
        }
        else if (bmi < 40){
            return "That is Obese Class 2"
        }
        else if (bmi >= 40){
            return "That is Obese Class 3"
        }
    }
    useEffect(() => {
        if (bmi) {
        setCustomMessage(getMessage(bmi));
        }
    }, [bmi]);
  
  
  
  
    return (
    <div className="output">
        <h2> Your BMI is:</h2>
        <h3>{bmi}</h3>
        <p>{customMessage}</p>
    </div>
  )
}
