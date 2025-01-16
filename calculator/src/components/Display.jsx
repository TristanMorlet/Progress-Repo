import React from 'react'

export default function Display( {currentInput, result} ) {
 
  return (
    <div className="display">
        <div className="result"> 
            {result !== null ? result : "0"}
        </div>
        <div className="input">
            {currentInput}
        </div>
    </div>
  );
}
