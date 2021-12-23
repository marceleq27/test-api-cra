import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        return setIsLoading(false);
      })
      .catch((err) => {
        console.error(`Console Log Driven Development :) => ${err}`);
        setError(err);
        return setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, isLoading, error };
};
