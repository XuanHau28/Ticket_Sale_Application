import React, { useState } from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)
export default function LineChart() {
    const [data, setData] = useState({
        labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN',],
        datasets: [ 
          {
            data: [150, 170, 160, 180, 190, 170, 160], 
            backgroundColor: 'rgba(250, 160, 95, 0.16)',
            borderColor: 'rgba(255, 138, 72, 1)',
            tension: 0.4,
            fill: true,
          }
      
        ]
      })
  return (
    <div className='LineChart'>
        <Line data={data} options={{
          plugins: {
            legend: { 
              display: false
            }
          },
          scales: {
            x:{
              grid: {
                display: false
              }
            }
          }
        }}/>
    </div>
  )
}
