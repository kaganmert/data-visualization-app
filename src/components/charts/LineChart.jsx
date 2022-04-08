import React, { useRef, useEffect } from "react";

import {
  Chart,
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip,
} from "chart.js";
import "chartjs-adapter-moment";

import { tailwindConfig, formatThousands } from "../../utils/Utils";

Chart.register(
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip
);

function LineChart({ data, width, height }) {
  console.log(data);
  const canvas = useRef(null);
  const chartValue = useRef(null);
  const chartValue2 = useRef(null);
  const chartDeviation = useRef(null);

  useEffect(() => {
    const ctx = canvas.current;
    // eslint-disable-next-line no-unused-vars
    const chart = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        layout: {
          padding: 20,
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
            },
            suggestedMin: 30,
            suggestedMax: 80,
            ticks: {
              maxTicksLimit: 5,
              callback: (value) => formatThousands(value),
            },
          },
          x: {
            type: "time",
            time: {
              parser: "hh:mm:ss",
              unit: "second",
              tooltipFormat: "hh:mm:ss",
              displayFormats: {
                second: "hh:mm:ss",
              },
            },
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              autoSkipPadding: 48,
              maxRotation: 0,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            titleFont: {
              weight: "600",
            },
            callbacks: {
              label: (context) => formatThousands(context.parsed.y),
            },
          },
        },
        interaction: {
          intersect: false,
          mode: "nearest",
        },
        animation: false,
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
    });
    return () => chart.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    const currentValue =
      data.datasets[0].data[data.datasets[0].data.length - 1];
    const previousValue =
      data.datasets[0].data[data.datasets[0].data.length - 2];
    const diff = ((currentValue - previousValue) / previousValue) * 100;
    chartValue.current.innerHTML =
      data.datasets[0].data[data.datasets[0].data.length - 1];
    chartValue2.current.innerHTML =
      data.datasets[1].data[data.datasets[1].data.length - 1];
    if (diff < 0) {
      chartDeviation.current.style.backgroundColor =
        tailwindConfig().theme.colors.yellow[500];
    } else {
      chartDeviation.current.style.backgroundColor =
        tailwindConfig().theme.colors.gray[500];
    }
    chartDeviation.current.innerHTML = `${diff > 0 ? "+" : ""}${diff.toFixed(
      1
    )}%`;
  }, [data]);

  return (
    <React.Fragment>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="mr-2 text-3xl font-bold text-slate-800 tabular-nums">
            <span ref={chartValue}>57.81</span>
            <span>/</span>
            <span ref={chartValue2}>57.81</span>
          </div>
          <div
            ref={chartDeviation}
            className="text-sm font-semibold text-white px-1.5 rounded-full"
          ></div>
        </div>
      </div>
      <div className="grow">
        <canvas ref={canvas} data={data} width={width} height={height}></canvas>
      </div>
    </React.Fragment>
  );
}

export default LineChart;
