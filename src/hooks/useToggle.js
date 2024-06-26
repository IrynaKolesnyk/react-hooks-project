import { useEffect, useState } from 'react';

const useToggle = (initialValue = [false, true]) => {
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState(null);

  const toggle = () => {
    const isArray = Array.isArray(initialValue);
    if (isArray) {
      setIndex((index + 1) % initialValue.length);
      setValue(
        typeof initialValue[index] === 'boolean' ? `${initialValue[index]}` : initialValue[index],
      );
    } else if (typeof initialValue === 'string') {
      setValue(initialValue);
    }
  };

  useEffect(() => {
    toggle();
  }, []);

  return [value, toggle];
};

export default useToggle;
