import { useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

import Select from "./Select";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    elements: {
        line: {
            borderWidth: 5
        },
        point: {
            radius: 0
        },
    },
    scales: {
        x: {
          grid: {
            display: false, // Hide the x-axis grid lines
          },
        },
        y: {
          grid: {
            display: false, // Hide the y-axis grid lines
          },
        },
      },
    plugins: {
      legend: {
        display: false
      }
    },
  };
  
  const labels = Array.from({ length: 31 }, (_, index) => index + 1);
  function getRandomInt(min, max) {
    min = Math.ceil(min); // Round up the minimum value
    max = Math.floor(max); // Round down the maximum value
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generateMonthOptions() {
    const today = new Date();
    const options = [];
  
    for (let i = 0; i <= 10; i++) {
      const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
      const label = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
      const value = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toLowerCase().replace(' ', '_');
  
      options.push({ label, value });
    }
  
    return options;
  }
  
  const FILTER_OPTIONS = generateMonthOptions();

const MoneyFlow = () => {
    const [selectedFilter, setSelectedFilter] = useState(FILTER_OPTIONS[0]);
    const [spend, setSpend] = useState(() => Array.from({length: 31}, () => getRandomInt(500, 10000)));

    const data = {
      labels,
      datasets: [
        {
          tension: 0.4,
          label: 'Dataset 1',
          data: spend,
          borderColor: '#163172',
          backgroundColor: '#163172',
        }
      ],
    };

    const handleFilterChange = (value) => {
      setSpend(() => Array.from({length: 31}, () => getRandomInt(500, 10000)));
      setSelectedFilter(value);
    }

    return (
        <div className="shadow-card bg-white rounded-2xl p-6 text-primary">
                <div className="flex justify-between items-center mb-5 mx-3">
                    <h2 className="font-semibold text-xl"> Money Flow</h2>
                    <Select value={selectedFilter} options={FILTER_OPTIONS} onChange={handleFilterChange} />
                </div>
                <div className="w-[650px]">
                  <Line
                      options={options}
                      data={data}
                  />
                  </div>
            <div>
            </div>
        </div>
    )
}

export default MoneyFlow;