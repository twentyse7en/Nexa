import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

import Select from "./Select";

ChartJS.register(ArcElement, Tooltip, Legend);

const BG_COLOR = [
  '#4C49ED',
  '#4FD18B',
  '#141197',
  '#9D9BF4'
];

const LABELS = [
  'Food',
  'Fuel',
  'Shopping',
  'Entertainment',
]

function getRandomInt(min, max) {
  min = Math.ceil(min); // Round up the minimum value
  max = Math.floor(max); // Round down the maximum value
  return Math.floor(Math.random() * (max - min + 1)) + min;
}




  const options = {
    responsive: true,
    cutout: 70, // Adjust the cutout percentage to control the size of the hole
    animation: {
        animateRotate: true,
        animateScale: false
    },
    plugins: {
        legend: {
            display: false,
            position: 'bottom'
        }
    },
};

const SpendingPie = () => {
    useEffect(() => {
        fetch('https://7603-103-181-238-106.ngrok-free.app/api/health', {
            method: "get",
            headers: new Headers({
              "ngrok-skip-browser-warning": "69420",
            }),
          })
    }, [])

    const FILTER_OPTIONS = [
      { value: 'day', label: 'Day' },
      { value: 'week', label: 'Week' },
      { value: 'month', label: 'Month' }
    ];

    const [filterOptions, setFilterOptions] = useState(FILTER_OPTIONS[2])
    const generateData = () => Array.from({length: 4}, () => getRandomInt(500, 10000))
    const [spend, setSpend] = useState(generateData)
    const data = {
      labels: LABELS,
      datasets: [{
        label: 'Spending: ',
        data: spend,
        backgroundColor: BG_COLOR,
        hoverOffset: 4
      }]
    };
    const handleFilterSelection = (val) => {
      setSpend(generateData())
      setFilterOptions(val);
    }
  
    return (
        <div className="p-6 rounded-3xl shadow-card  w-[550px] bg-white">
            <div className="flex justify-between items-center">
                <h2 className="text-lg text font-semibold mr-4 text-primary">All Expenses</h2>
                <Select value={filterOptions} options={FILTER_OPTIONS} onChange={handleFilterSelection} />
            </div>
            <div className="w-[200px] h-[200px] mx-auto mt-10">
                <Doughnut data={data} options={options} />
            </div>
            <div className="flex flex-wrap gap-x-2 mt-4">
              {
                LABELS.map((label, index) => {
                  return (
                    <div className="flex items-center gap-x-2" key={label}>
                      <div className="w-3 h-2 rounded-full" style={{backgroundColor: BG_COLOR[index]}} />
                      <p className="text-secondary text-xs">{label}</p>
                  </div>
                  )
                })
              }
            </div>
        </div>
    )
}

export default SpendingPie;