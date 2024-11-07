import { useState, useEffect } from 'react';



export function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null); // Estado de error

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`); // Manejo de errores HTTP
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message); // Captura errores y actualiza el estado
      }
    };

    fetchData();
  }, [url]);

  return { data, setData, error };
}

