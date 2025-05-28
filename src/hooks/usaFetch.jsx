import { useEffect, useState } from "react";
import { api } from "../api";

export const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get(endpoint)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err);
      });
  }, [endpoint]);

  return { data, loading, error };
  };