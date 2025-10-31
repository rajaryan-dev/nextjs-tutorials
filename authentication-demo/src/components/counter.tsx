"use client";

import { useState } from "react";
import {
  useAuth,
  // useUser
} from "@clerk/nextjs";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const {
    isLoaded,
    userId,
    // sessionId, getToken
  } = useAuth();
  //   const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !userId) {
    return null;
  }

  //   if (!isLoaded || !isSignedIn) {
  //     return null;
  //   }

  return (
    <>
      <p className="bg-slate-600 p-2">Count: {count}</p>
      <button
        className="rounded-full bg-blue-600 p-2"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        className="rounded-full bg-blue-600 p-2"
        disabled={count <= 0}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </>
  );
};
