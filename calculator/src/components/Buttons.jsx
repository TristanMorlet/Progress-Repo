import React from 'react'

export default function Buttons({onButtonClick}) {
  
  const btnValues = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "C", "0", "=", "+"
];
  
    return (
    <div className='buttons'>
        {btnValues.map((btn) => (
            <button
                key ={btn}
                onClick ={() => onButtonClick(btn)}
            >
               {btn}
            </button> 
        ))}
    </div>
  );
}
