import { useState } from 'react';

export const useLocalStorage = key => {
  const [token, setToken] = useState(
    () => localStorage.getItem(key) ?? null,
  );

  const setItem = value => {
    setToken(value);
    localStorage.setItem(
      key,
      JSON.stringify(value),
    );
  };

  const removeItem = () => {
    setToken(null);
    localStorage.removeItem(key);
  };
  return [token, { setItem, removeItem }];
};
