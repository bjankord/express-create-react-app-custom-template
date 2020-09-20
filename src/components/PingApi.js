import React, { useState, useEffect } from "react";

const PingApi = () => {
  const [apiResponse, setApiResponse] = useState({});

  async function fetchData() {
    const res = await fetch("/api/ping");
    res
      .json()
      .then(res => setApiResponse(res));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <p>API response from api/ping: {JSON.stringify(apiResponse)}</p>
  );
};
export default PingApi;