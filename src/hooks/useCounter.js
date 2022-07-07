import { useCallback, useState } from "react";

const useCounter = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const set = useCallback((value) => setValue(value), []);
  const incr = useCallback((by = 1) => setValue((c) => c + by), []);
  const decr = useCallback((by = 1) => setValue((c) => c - by), []);
  return { value, set, incr, decr };
};

export default useCounter;
