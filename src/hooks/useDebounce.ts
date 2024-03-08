import { useEffect, useState } from "react";

function useDebounce(value: string, delay: number) {
  const [debounnceValue, setDebounnceValue] = useState<string>(value);
  useEffect(() => {
    const handlerTimeout = setTimeout(() => {
      setDebounnceValue(value);
    }, delay);

    return () => {
      clearTimeout(handlerTimeout);
    };
  }, [value, delay]);
  return { debounnceValue };
}

export default useDebounce;
