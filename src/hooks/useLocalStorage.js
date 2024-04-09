import { useState } from "react";

export const useLocalStorage = (key) => {
  const [token, setToken] = useState(null);

  const setItem = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setToken(value);
  };

  const removeItem = () => {
    setToken(null);
    localStorage.removeItem(key);
  };
  return [token, { setItem, removeItem }];
};
