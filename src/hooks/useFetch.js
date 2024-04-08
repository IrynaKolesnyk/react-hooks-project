import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getData = async (options) => {
    setError(false);
    setIsLoading(true);

    const urlWithLimits = options?.params
      ? `${url}?_limit=${options?.params?._limit}`
      : url;

    try {
      const response = await fetch(urlWithLimits);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      setData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const refetch = (options) => {
    getData(options);
  };

  return { data, isLoading, error, refetch };
};
