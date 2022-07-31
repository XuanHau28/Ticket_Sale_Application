import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';
import { Doughnut } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)
//display Date
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
export default function Home() {
  // Chart
const [data, setData] = useState({
  labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN',],
  datasets: [ 
    {
      data: [150, 170, 160, 190, 195, 200, 190], 
      backgroundColor: 'rgba(250, 160, 95, 0.16)',
      borderColor: 'rgba(255, 138, 72, 1)',
      tension: 0.4,
      fill: true,
    }

  ]
})
  return (
    <div className='content'>
        <h1>Thống kê</h1>
        <h3>Doanh thu</h3>
        <Space direction="vertical">
        <DatePicker className='date-picker' placeholder='Enter Date'  onChange={onChange} />
        </Space>
        <div className='chart'>
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
    <p style={{marginLeft:"24px"}}>Tổng doanh thu theo tuần</p> 
    <p style={{marginLeft:"24px"}}><span>525.145.000</span> đồng</p>
    <Space direction="vertical">
        <DatePicker className='date-picker2' placeholder='Enter Date'  onChange={onChange} />
        </Space>
        {/* <Doughnut /> */}
    </div>
    
  )
}
