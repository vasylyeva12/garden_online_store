import React, { useState } from 'react'; 
import s from './index.module.css';
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

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
        <button onClick={decrement} className={s.counterButton}><FiMinus /></button>
        <span className={s.counterValue}>{count}</span>
        <button onClick={increment} className={s.counterButton}><FiPlus /></button>    
    </div>
  )
}

export default Counter
