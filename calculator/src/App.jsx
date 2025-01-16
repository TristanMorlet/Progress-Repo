import React from 'react'
import Buttons from './components/buttons'
import Display from "./components/Display"
import './App.css'
import {useState} from 'react'

export default function App() {
  

  function calculateResult(num1, num2, operator) {
    switch (operator) {
        case "+":
            return parseFloat(num1) + parseFloat(num2);
        case "-":
            return parseFloat(num2) - parseFloat(num1);
        case "*":
            return parseFloat(num1) * parseFloat(num2);
        case "/":
            return parseFloat(num2) / parseFloat(num1);
        default:
            return num2;
    }
  }




  const [currentInput, setCurrentInput] = useState("")
  const [result, setResult] = useState(null)
  const [operator, setOperator] = useState(null)
  
  function handleButtonClick(val){
    if (val === "C") {
        setCurrentInput("");
        setResult(null);
        setOperator(null);
    
    
    }  else if (!isNaN(val)) {
        setCurrentInput((prev) => prev + val)    
    
    
    } else if (val === "=") {
        const calculatedResult = calculateResult(currentInput, result, operator);
        setResult(calculatedResult);
        setCurrentInput("")
        setOperator(null)
    
    
    } else if (val === "+" || val === "-" || val === "*" || val === "/"){
        
        setOperator(val)
        if (result === null) {
            setResult(currentInput);
        if (currentInput === "") {
            setCurrentInput(result);
        }
        } else {
            setResult(calculateResult(currentInput, result, operator))
        }
   
        setCurrentInput("")
    } 
}

  
  
  
  
  
    return (
    <div className="calculator">
        <Display currentInput={currentInput} result = {result}/>
        <Buttons onButtonClick={handleButtonClick} />
    </div>
  )
}

