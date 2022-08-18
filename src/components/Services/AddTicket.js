import React from 'react';
import { DatePicker, Space, Select, Checkbox } from 'antd';
import '../Services/AddTicket.css'
import { TimePicker } from 'antd';
import moment from 'moment';
const { Option } = Select;

export default function AddTicket() {
  return (
    <div className='add'>
        <div className='add-overlay'>
            <div className='add-content'>
                <h2>Thêm gói vé</h2>
                <p style={{fontWeight: '600', fontSize: '16px'}}>Tên gói vé <span style={{color: 'red'}}>*</span></p>
                <input className='enter-name' type='text' placeholder=' Nhập tên gói vé'></input>
                <div className='date'>
                  <section className='apply-date'>
                  <p>Ngày áp dụng</p>
                  <Space direction="vertical">
                      <DatePicker style={{borderRadius:'8px'}} placeholder='dd/mm/yyyy' />
                  </Space>
                  <TimePicker style={{borderRadius:'8px'}} placeholder='hh:mm:ss' defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                  </section>
                  <section className='expired-date'>
                  <p>Ngày hết hạn</p>
                  <Space direction="vertical">
                      <DatePicker style={{borderRadius:'8px'}} placeholder='dd/mm/yyyy' />
                  </Space>
                  <TimePicker style={{borderRadius:'8px'}} placeholder='hh:mm:ss' defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                  </section>
                </div>
                <section className='price'>
                <p>Giá vé áp dụng</p>
                <section className="single-price">
                <Checkbox> </Checkbox> <span>Vé lẻ &#40;vnđ/vé&#41; với giá </span>
                <input type='text' placeholder=' Giá vé'></input> <span>/Vé</span>
                <br/>
                </section>
                <section className="combo-price">
                <Checkbox> </Checkbox> <span>Combo vé với giá   </span>
                <input type='text' placeholder=' Giá vé'></input>  <span> / </span>
                <input style={{width: '72px'}} type='text' placeholder=' Giá vé'/><span> vé</span>
                </section>
                </section>
                <section className="status">
                <p>Tình trạng</p>
                <Select>
                <Option value="using">Đang áp dụng</Option>
                <Option value="off">Tắt</Option>
                </Select>
                </section>
                <p><span style={{color: 'red'}}>*</span> là thông tin bắt buộc</p>
                <section className='button'>
                  <button>Huỷ</button>
                  <button>Lưu</button>
                </section>
            </div>
        </div>
    </div>
  )
}
