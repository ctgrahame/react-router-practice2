import React, { useState } from 'react';
import { useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    const signal = abortCont.signal;
    fetch(url, { signal })
      .then((response) => {
        if (!response.ok) {
          throw Error('could not fetch the data for the resource');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setIsLoading(false);
        setErrorMessage(null);
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('fetch aborted');
        } else {
          setIsLoading(false);
          setErrorMessage(error.message);
        }
      });

    return () => abortCont.abort();
  }, [url]);

  return { data, isLoading, errorMessage };
};

export default useFetch;
