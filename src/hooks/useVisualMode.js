import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace) {
    if (!replace) {
      setHistory((prev) => [...prev, mode]);
    }
    setHistory((prev) => [...prev.slice(0, prev.length - 1), mode]);
  }

  function back() {
    if (history.length <= 1) {
      return;
    }
    setHistory((prev) => [...prev.slice(0, prev.length - 1)]);
    setMode(history[history.length - 1]);
  }
  return { mode: history[history.length - 1], transition, back };
}
