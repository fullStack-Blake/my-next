import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      Number is {counter}
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
    </div>
  );
}
