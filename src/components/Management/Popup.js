import React, { useState } from 'react';
import { Radio } from 'antd';
import { DatePicker, Space } from 'antd';
import '../Management/popup.css'
import { Checkbox, Col, Row } from 'antd';


export default function Popup(props) {

  //disabled checkbox
  const [disabled, setDisabled] = useState(false);
  const clickDisabled = () => {
    setDisabled(!disabled);
  }

  //Radio checked
  const [value, setValue] = useState(0);

  return (props.trigger) ? (
  <>
    <div className="popup">
        <div om className="overlay">
          <div className="model-content">
            <h2>Lọc vé</h2>
            <section className='fromday-today'>
           <section className='from-day'>
            <p>Từ ngày</p>
            <Space direction="vertical">
            <DatePicker className='date-picker' placeholder='01/04/2021' />
            </Space>
           </section>
           <section>
            <p>Đến ngày</p>
            <Space direction="vertical">
            <DatePicker className='date-picker' placeholder='01/04/2021' />
            </Space>
           </section>
           </section>
           <section className='status-of-use'>
            <p>Tình trạng sử dụng</p>
            <Radio.Group  >
              <Radio  value="A">Tất cả</Radio>
              <Radio  value="B">Đã sử dụng</Radio>
              <Radio  value="C">Chưa sử dụng</Radio>
              <Radio  value="D">Hết hạn</Radio>
            </Radio.Group>
           </section>
           <section className="gate-checkin">
            <h3>Cổng Check - in</h3>
            <Checkbox.Group 
    style={{
      width: '100%',
    }}
 
  
  >
    <Row>
      <Col span={8}>
        <Checkbox onChange={clickDisabled} value={0}>
        Tất cả</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox disabled={disabled} value={1}>Cổng 1</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox disabled={disabled} value={2}>Cổng 2</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox disabled={disabled} value={3}>Cổng 3</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox disabled={disabled} value={4}>Cổng 4</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox disabled={disabled} value={5}>Cổng 5</Checkbox>
      </Col>
    </Row>
  </Checkbox.Group>
           </section>
           <button onClick={() => props.setTrigger(false)}>Lọc</button>
           {props.children}
            </div>
        </div>

    </div>
    
   
    </>
  
    ): "";
}