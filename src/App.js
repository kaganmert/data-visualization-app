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
  const [connected, setConnected] = useState([]);
  const [disconnected, setDisconnected] = useState([]);
  const [packetReceived, setPacketReceived] = useState([]);
  const [packetSent, setPacketSent] = useState([]);

  const { data } = useFetch(
    setDate,
    setActiveSubscriptions,
    setConnected,
    setDisconnected,
    setPacketReceived,
    setPacketSent
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
                  date={date}
                  packetReceived={packetReceived}
                  packetSent={packetSent}
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
