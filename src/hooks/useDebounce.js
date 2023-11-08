import { useCallback, useEffect } from "react";

const useDebounce = (callback, dependencies, delay) => {
  const memoizedCallback = useCallback(callback, dependencies);

  useEffect(() => {
    const timerId = setTimeout(memoizedCallback, delay);
    return () => {
      clearTimeout(timerId);
    }
  }, [delay, memoizedCallback])
}

export default useDebounce;
