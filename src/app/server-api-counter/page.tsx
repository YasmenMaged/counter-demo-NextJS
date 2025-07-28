"use client";

import { useActionState } from "react";
import {
  decrementCounter,
  incrementCounter,
} from "../../actions/counter.actions";

export default function ServerApiCounterPage() {
  const [incrementCount, incrementAction] = useActionState(incrementCounter, 0);
  const [decrementCount, decrementAction] = useActionState(decrementCounter, 0);

  return (
    <div className="flex flex-col gap-4">
      <p>Count: {incrementCount + decrementCount}</p>
      <form
        action={incrementAction}
        className="flex flex-row items-center justify-center p-2 border border-black bg-red-200 rounded shadow-md"
      >
        <input type="hidden" name="counter" value={incrementCount} />
        <button type="submit">Increment</button>
      </form>
      <form
        action={decrementAction}
        className="flex flex-row items-center justify-center p-2 border border-black bg-blue-200 rounded shadow-md"
      >
        <input type="hidden" name="counter" value={decrementCount} />
        <button type="submit">Decrement</button>
      </form>
    </div>
  );
}
