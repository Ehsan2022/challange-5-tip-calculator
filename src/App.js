/** @format */

import { useState } from "react";

export default function App() {
  return (
    <div className="app">
      <h2>Tip Calculator</h2>
      <TipCalculator></TipCalculator>
    </div>
  );
}
function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <Bill bill={bill} onSetBill={setBill}></Bill>
      <Percentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </Percentage>
      <Percentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </Percentage>
      {bill > 0 && (
        <>
          <OutPut bill={bill} tip={tip}></OutPut>
          <Reset handleReset={handleReset}></Reset>
        </>
      )}
    </div>
  );
}
function Bill({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        className="input"
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
function Percentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        className="select"
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
function OutPut({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}
function Reset({ handleReset }) {
  return <button onClick={handleReset}>Reset</button>;
}
