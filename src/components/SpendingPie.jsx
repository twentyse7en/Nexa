import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect } from "react";
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

const data = {
    labels: LABELS,
    datasets: [{
      label: 'Spending: ',
      data: [300, 50, 100, 400],
      backgroundColor: BG_COLOR,
      hoverOffset: 4
    }]
  };


  const options = {
    responsive: true,
    cutout: 90, // Adjust the cutout percentage to control the size of the hole
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

    return (
        <div className="p-6 rounded-3xl shadow-card  w-[400px]">
            <div className="flex justify-between items-center">
                <h2 className="text-lg text font-black mr-4">All Expenses</h2>
                <Select />
            </div>
            <div className="w-[250px] mx-auto mt-10">
                <Doughnut data={data} options={options} />
            </div>
            <div className="flex flex-wrap gap-x-2 mt-4">
              {
                LABELS.map((label, index) => {
                  return (
                    <div className="flex items-center gap-x-2" key={label}>
                      <div className="w-10 h-3 rounded-full" style={{backgroundColor: BG_COLOR[index]}} />
                      <p className="text-secondary">{label}</p>
                  </div>
                  )
                })
              }
            </div>
        </div>
    )
}

export default SpendingPie;