import './App.css';
import Counter from './components/Counter';
import Quantity from './components/Quantity';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [initialValue, setInitialValue] = useState(10);
  const [min, setMin] = useState(4);
  const [max, setMax] = useState(16)

  // need to define two functions: increment and decrement

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  }

  const decrement = () => {
    setCount(count - 1);
    console.log(count);
  }

  const Card = () => {
    return count > 5 ? 
    (<p>{count} is more than 5</p>) :
    (<p>{count} is less than or equal to 5</p>)
  };

  return (
    <div className="App">
      <Card />
        <Counter 
          handleDec={decrement} 
          handleInc={increment} 
          count={count}
        />
        <Quantity 

          initialValue = {initialValue}
          min={min}
          max={max}
          // handleDec={handleDec}
          // handleInc={handleInc}
        />
    </div>
  );
}

export default App;
