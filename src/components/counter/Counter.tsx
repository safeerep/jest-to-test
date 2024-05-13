import { useState } from "react";

export default () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <div>
        <h1>{count}</h1>
      </div>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <div>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          onChange={(e) => {
            setAmount(Number(e.target.value));
          }}
          placeholder="type amount here"
          className="border"
        />
        <button
          onClick={() => {
            setCount(amount);
          }}
        >
          set count
        </button>
      </div>
    </div>
  );
};
