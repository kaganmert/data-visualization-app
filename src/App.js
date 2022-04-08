import React, { useState } from "react";
import useFetch from "./hooks/useFetch.js";
import DashboardCard from "./components/cards/DashboardCard";
import MultipleResultCard from "./components/cards/MultipleResultCard.jsx";
import { DataNotFound } from "./components/warnings/DataNotFound.js";
import "./components/charts/config/ChartjsConfig";
import "./css/style.scss";

function App() {
  const [date, setDate] = useState([]);
  const [activeSubscriptions, setActiveSubscriptions] = useState([]);
  const [packetReceived, setPacketReceived] = useState([]);
  const [packetSent, setPacketSent] = useState([]);
  const [bytesReceived, setBytesReceived] = useState([]);
  const [bytesSent, setBytesSent] = useState([]);
  const { data } = useFetch(
    setDate,
    setActiveSubscriptions,
    setPacketReceived,
    setPacketSent,
    setBytesReceived,
    setBytesSent
  );
  if (!data) {
    return <DataNotFound />;
  } else {
    return (
      <div className="flex h-screen overflow-hidden">
        <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
          <main>
            <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">
              <div className="grid grid-cols-12 gap-6">
                <DashboardCard
                  date={date}
                  activeSubscriptions={activeSubscriptions}
                />
                <MultipleResultCard
                  title="Messages"
                  date={date}
                  received={packetReceived}
                  sent={packetSent}
                />
                <MultipleResultCard
                  title="Bytes"
                  date={date}
                  received={bytesReceived}
                  sent={bytesSent}
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
