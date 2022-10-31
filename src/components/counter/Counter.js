import React, { useState } from 'react'

export default function Counter() {
    let [number, setNumber] = useState(0);

    const handleartır = () => {
        setNumber(number + 1);
        console.log("Arttırıldı",number)
    }
    const handleazalt = () => {
        setNumber(number - 1);
        console.log("Azaltıldı",number)
    }

  return (
    <div>
        {number}
        <p>
            <button onClick={handleartır}>+</button>
            <button onClick={handleazalt}>-</button>
        </p>
        
    </div>
  )
}
