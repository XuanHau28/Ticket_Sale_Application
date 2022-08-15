import { Input, Radio, Space, DatePicker  } from 'antd';

import React, { useState } from 'react';
import Search from "../../assets/images/Search.svg";
import '../Check/checkStyle.css'
import CheckList from './checklist.js';

export default function Check() {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
 
  return (
    <>
    <div className="check-content">
    <div className='content'>
        <h1 style={{ marginLeft:24}}>Đối soát vé</h1>
        <input className='SearchList' type="search" placeholder='Search' /> <img className='SearchIcon' src={Search} />
        <button className='btn-export-file'>Xuất file </button>
        <CheckList />
    </div>
        <div className='FilterTickets'>
          <h1>Lọc vé</h1> 
            <section className='control-status'>
              <h2>Tình trạng đối soát</h2>
              <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                  <Radio value={1}>Tất cả</Radio>
                  <Radio value={2}>Đã đối soát</Radio>
                  <Radio value={3}>Chưa đối soát</Radio>
                </Space>
              </Radio.Group>
            </section>
            <section className='ticket-type'>
              <h2>Loại vé</h2>
              <p>Vé cổng</p>
            </section>
            <section className='start-date'>
              <h2>Từ ngày</h2>
              <Space direction="vertical">
              <DatePicker className='date-picker' placeholder='01/04/2021'  onChange={onChange} />
              </Space>
            </section>
            <section className='end-date'> 
              <h2>Đến ngày</h2>
              <Space direction="vertical">
              <DatePicker className='date-picker' placeholder='01/04/2021'  onChange={onChange} />
              </Space>
            </section>
            <button >Lọc</button>
        </div>
        </div>
    </>
  )
}
