import "./Quantity.module.scss";

const Quantity = ( {
    onChange,
    initialValue,
    min,
    max,
    handleDec,
    handleInc
}) => {
    return (
      <div className="Quantity">
        <h1>Quantity Component</h1>
        <p>Number of Students: {initialValue}</p>
        <p>Min Number Possible: {min}</p>
        <p>Max Number Possible: {max}</p>
        <button onClick={handleInc}>Add students</button>
        <button onClick={handleDec}>Subtract students</button>
      </div>
    );
}

export default Quantity
