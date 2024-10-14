import React, { useState } from 'react'; 
import s from './index.module.css';

const Counter = () => {
    const [count, setCount] = useState(1); 

      const increment = () => {
      setCount(count + 1);
    };
  
    
    const decrement = () => {
      if (count > 1) { // Не позволяем значению опуститься ниже 1
        setCount(count - 1);
      }
    };

return (
    
    <div className={s.counter}>
        <button onClick={decrement} className={s.counterButton}>-</button>
        <span className={s.counterValue}>{count}</span>
        <button onClick={increment} className={s.counterButton}>+</button>
      
    </div>

    
  )
}

export default Counter
