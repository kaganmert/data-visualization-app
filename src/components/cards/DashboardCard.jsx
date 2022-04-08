import React, { useState, useEffect } from "react";

import RealtimeChart from "../charts/RealtimeChart";
import { tailwindConfig, hexToRGB } from "../../utils/Utils";

function DashboardCard() {
  const [counter, setCounter] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [range, setRange] = useState(2);

  const data = JSON.parse(localStorage.getItem("activeSubscriptions"));

  const [slicedData, setSlicedData] = useState(data.slice(0, range));

  // Generate dates from local storage
  const generateDates = () => {
    return JSON.parse(localStorage.getItem("dates"));
  };

  const [slicedLabels, setSlicedLabels] = useState(
    generateDates().slice(0, range).reverse()
  );

  // Update chart every 5 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [counter]);

  // Loop through local storage array and update
  useEffect(() => {
    setIncrement(increment + 1);
    if (increment + range < data.length) {
      setSlicedData(([x, ...slicedData]) => [
        ...slicedData,
        data[increment + range],
      ]);
    } else {
      setIncrement(0);
      setRange(0);
    }
    setSlicedLabels(([x, ...slicedLabels]) => [...slicedLabels, new Date()]);
    return () => setIncrement(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  const chartData = {
    labels: slicedLabels,
    datasets: [
      {
        data: slicedData,
        fill: true,
        backgroundColor: `rgba(${hexToRGB(
          tailwindConfig().theme.colors.blue[500]
        )}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20,
      },
    ],
  };

  return (
    <div className="flex flex-col bg-white border rounded-sm shadow-lg col-span-full sm:col-span-6 border-slate-200">
      <header className="flex items-center px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Active Subscriptions</h2>
      </header>
      <RealtimeChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCard;
