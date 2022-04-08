import { useState, useEffect } from "react";
import mqtt from "mqtt";
import moment from "moment";

function useFetch(
  setDate,
  setActiveSubscriptions,
  setPacketReceived,
  setPacketSent,
  setBytesReceived,
  setBytesSent
) {
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
      setDate((o) => [...o, moment().format("hh:mm:ss")]);
      setActiveSubscriptions((o) => [
        ...o,
        JSON.parse(payload).activeSubscriptions,
      ]);
      setPacketReceived((o) => [...o, JSON.parse(payload).packetReceived]);
      setPacketSent((o) => [...o, JSON.parse(payload).packetSent]);
      setBytesReceived((o) => [...o, JSON.parse(payload).messageBytesReceived]);
      setBytesSent((o) => [...o, JSON.parse(payload).messageBytesSent]);
      setData(JSON.parse(payload));
    });
  }, []);

  return { data, loading, error };
}

export default useFetch;
