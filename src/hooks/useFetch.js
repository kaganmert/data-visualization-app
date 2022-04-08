import { useState, useEffect } from "react";
import mqtt from "mqtt";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);
    var options = {
      clientId: `${process.env.REACT_APP_CLIENT_ID}`,
      reconnectPeriod: `${process.env.REACT_APP_RECONNECT_PERIOD}`,
    };
    const client = mqtt.connect(`${process.env.REACT_APP_CONNECTION}`, options);
    client.subscribe("$SYS", { qos: 0 });
    client.on("message", (topic, payload, packet) => {
      setData(JSON.parse(payload));
    });
  }, []);

  return { data, loading, error };
}

export default useFetch;
