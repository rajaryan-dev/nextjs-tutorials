"use client";
import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Counter Page</h1>
      <h2>Count: {count}</h2>
      <button
        className="bg-blue-500 rounded m-2"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        className="bg-blue-500 rounded m-2"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </>
  );
}
