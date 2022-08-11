import React, { useState } from 'react';
import { Radio } from 'antd';
import { DatePicker, Space } from 'antd';
import '../Management/popup.css'
import { Checkbox, Col, Row } from 'antd';
import Filter from '../../assets/images/Filter.svg';


const onChange = (checkedValues) => {
  console.log('checked = ', checkedValues);
};

export default function Popup(props) {
  
  //Radio checked
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return  (
    <div className="popup">
        <div className="overlay">
          <div className="model-content">
            <h2>Lọc vé</h2>
            <section className='fromday-today'>
           <section className='from-day'>
            <p>Từ ngày</p>
            <Space direction="vertical">
            <DatePicker className='date-picker' placeholder='01/04/2021'  onChange={onChange} />
            </Space>
           </section>
           <section>
            <p>Đến ngày</p>
            <Space direction="vertical">
            <DatePicker className='date-picker' placeholder='01/04/2021'  onChange={onChange} />
            </Space>
           </section>
           </section>
           <section className='status-of-use'>
            <p>Tình trạng sử dụng</p>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>Tất cả</Radio>
              <Radio value={2}>Đã sử dụng</Radio>
              <Radio value={3}>Chưa sử dụng</Radio>
              <Radio value={4}>Hết hạn</Radio>
            </Radio.Group>
           </section>
           <section className="gate-checkin">
            <h3>Cổng Check - in</h3>
            <Checkbox.Group
    style={{
      width: '100%',
    }}
    onChange={onChange}
  >
    <Row>
      <Col span={8}>
        <Checkbox value="A">Tất cả</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="B">Cổng 1</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="C">Cổng 2</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="D">Cổng 3</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="E">Cổng 4</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="F">Cổng 5</Checkbox>
      </Col>
    </Row>
  </Checkbox.Group>
           </section>
           <button >Lọc</button>
            </div>
        </div>
    </div>
  )  
}
