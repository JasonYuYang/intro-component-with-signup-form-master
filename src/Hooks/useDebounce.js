import { useRef, useCallback } from 'react';

function debounce(fn, ms) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, ms);
  };
}

// Hook

const useDebounce = (fn, delay) => {
  const fRef = useRef();
  fRef.current = fn;

  const result = useCallback(
    debounce(() => fRef.current(), delay),
    []
  );

  return result;
};

export default useDebounce;
