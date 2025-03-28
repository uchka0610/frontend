import { useState, useEffect } from "react";

export default function TimeoutCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 10) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div>
      <h1>Counting: {count}</h1>
    </div>
  );
}
