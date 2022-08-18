import React from 'react';
import { DatePicker, Space } from 'antd';
import LineChart from './LineChart';
import FamilyPackageChart from './FamilyPackageChart';
import EventPackageChart from './EventPackageChart';

//display Date
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
export default function Home() {
 
  return (
    <div className='content'>
      <div className='home'>
        <h1>Thống kê</h1>
        <h3>Doanh thu</h3>
        <Space direction="vertical">
        <DatePicker className='date-picker' placeholder='01/04/2021'  onChange={onChange} />
        </Space>
        <LineChart />
          <p style={{marginLeft:"24px", marginTop:"73px"}}>Tổng doanh thu theo tuần</p> 
          <p style={{marginLeft:"24px", fontSize:"14px", fontWeight:"500"}}><span style={{ fontWeight:"700", fontSize:"24px", lineHeight:"30px"}}>525.145.000</span> đồng</p>
        <Space direction="vertical">
          <DatePicker className='date-picker2' placeholder='01/04/2021'  onChange={onChange} />
        </Space>
        <div className='chart'>
        <div className='FamilyPackage'>
          <p>Gói gia đình</p>
          <FamilyPackageChart />
        </div>
        <div className='EventPackage'>
          <p>Gói sự kiện</p>
          <EventPackageChart />
        </div>
        </div>
        <div className='statistical'>
        <ul >
          <li><span className='usedTickets'></span>Vé đã sử dụng</li>
          <li><span className='unusedTickets'></span>Vé chưa sử dụng</li>
        </ul>
        </div>
        </div>
    </div>
    
  )
}
