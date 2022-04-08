import LineChart from "../charts/LineChart";
import { tailwindConfig, hexToRGB } from "../../utils/Utils";

function DashboardCard({ title, date, received, sent }) {
  const chartData = {
    labels: date,
    datasets: [
      {
        data: received,
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
      {
        data: sent,
        borderColor: tailwindConfig().theme.colors.gray[300],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.gray[300],
        clip: 20,
      },
    ],
  };

  return (
    <div className="flex flex-col bg-white border rounded-sm shadow-lg col-span-full sm:col-span-4 border-slate-200">
      <header className="flex items-center px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">{title}-Received/Sent</h2>
      </header>
      <LineChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCard;
