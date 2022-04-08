import React from "react";

import useFetch from "./hooks/useFetch.js";
import StoragePersister from "./utils/StoragePersister.js";

import DashboardCard from "./components/cards/DashboardCard";
import MultipleResultCard from "./components/cards/MultipleResultCard.jsx";
import { DataNotFound } from "./components/warnings/DataNotFound.js";
import "./components/charts/config/ChartjsConfig";

import "./css/style.scss";

function App() {
  const { data } = useFetch();
  if (!data) {
    return <DataNotFound />;
  } else {
    StoragePersister(data);
    return (
      <div className="flex h-screen overflow-hidden">
        <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
          <main>
            <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">
              <h1
                className="text-2xl md:text-3xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
              >
                If the data is not visible, please refresh the page.
              </h1>{" "}
              <div className="grid grid-cols-12 gap-6">
                <DashboardCard />
                <MultipleResultCard />
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
