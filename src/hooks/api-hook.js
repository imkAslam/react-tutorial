import axios from "axios";
import { useState, useEffect, useCallback } from "react";

export function useGetApiData({ endPoint, accessToken }) {
  const [state, setState] = useState({
    loading: false,
    error: null,
    data: null,
  });

  useEffect(() => {
    if (!accessToken) {
      setState((prevState) => ({
        ...prevState,
        error: "Access token is required",
      }));
    }
    if (!endPoint) {
      setState((prevState) => ({
        ...prevState,
        error: "Invalid API endpoint. Endpoint is required",
      }));
    }
  }, [accessToken, endPoint]);

  // Fetch data function using callbackFunction to cache the results to optimize the performance
  const fetchData = useCallback(async () => {
    setState((prevState) => ({
      ...prevState,
      loading: true,
    }));

    try {
      // Fetch data using Axios
      const response = await axios.get(endPoint, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setState({
        loading: false,
        error: null,
        data: response?.data?.data || [],
      });
    } catch (err) {
      console.error(`❌ Failed to get data from: ${endPoint}`, err);
      setState({
        loading: false,
        error: `Failed to get data from: ${endPoint}`,
        data: null,
      });
    }
  }, [accessToken, endPoint]);

  // Fetch data on mount and when endpoint changes
  useEffect(() => {
    fetchData();
  }, [fetchData, endPoint]);

  return {
    ...state,
    refetch: fetchData,
  };
}
