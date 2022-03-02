import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  //set transition function to add new transition into array
  function transition(newMode, replace) {
    setMode(newMode);
    //set replace to replace element in array if replace is true
    if (!replace) {
      setHistory((prev) => [...prev, newMode]);
    } else {
      setHistory((prev) => [...prev.slice(0, prev.length - 1), newMode]);
    }
  }

  //back state function
  function back() {
    if (history.length > 1) {
      setHistory((prev) => [...prev.slice(0, prev.length - 1)]);
      setMode(history[history.length - 2]);
    }
  }
  return { mode, transition, back };
}
