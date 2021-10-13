const Counter = ( {handleDec, handleInc, count}) => {
  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={handleInc}>Incrementing</button>
      <button onClick={handleDec}>Decrementing</button>
    </div>
  );
}

export default Counter

// -------------------------------
//EXAMPLE THAT DOES NOT USE STATE SO DOES NOT RE-RENDER PAGE EVENTHOUGH COUNT CHANGES

// const Counter = ({}) => {
//     let count = 0;

//     const increment = () => {
//         count += 1;
//         console.log(count);
//     }

//     const decrement = () => {
//         count -= 1;
//         console.log(count);
//     }

//     return (
//       <div>
//         <p>Current Count: {count}</p>
//         <button onClick={increment}>Incrementing</button>
//         <button onClick={decrement}>Decrementing</button>
//       </div>
//     );
// }

// export default Counter;
