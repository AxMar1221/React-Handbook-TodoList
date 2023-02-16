import React, { useEffect, useState } from 'react'

export const CounterT = () => {
    const [count, setCount] = useState(0)
    const name = 'Tachi';

    useEffect(() => {
        console.log(`clicked ${ count } times`);
    },[name, count]);
  return (
    <div>
        <p>Hi {name}! 
        <br />
        clicked { count } times</p>
        <button onClick={()=> setCount(count +1 ) }>Click to count!!!</button>
    </div>
  )
}
