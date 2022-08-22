import { Space, Table, Tag } from 'antd';
import React, {useState} from 'react';
import updateIcon from '../../assets/images/update.svg';
import UpdateTicket from '../Services/UpdateTicket'

const columns = [
    {
        title: 'STT',
        dataIndex: 'number',
        key: 'number',
      },
      {
        title: 'Mã gói',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Tên gói vé',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Ngày áp dụng',
        dataIndex: 'applyDate',
        key: 'applyDate',
      },
      {
        title: 'Ngày hết hạn',
        dataIndex: 'expiredDate',
        key: 'expiredDate',
      },
      {
        title: 'Giá vé (VNĐ/Vé)',
        dataIndex: 'priceTicket',
        key: 'priceTicket',
      },
      {
        title: 'Giá Combo (VNĐ/Combo)',
        dataIndex: 'priceCombo',
        key: 'priceCombo',
      },
  {
    title: 'Tình trạng',
    key: 'status',
    dataIndex: 'status',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 6 ? 'green' : 'volcano';
          return (
            <Tag color={color} key={tag}>
              {tag}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_) => (
      <Space size="middle">
        <a><img src={updateIcon} /> Cập nhật</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    number: 1,
    id: 'ALT20210501',
    name: 'Gói gia đình',
    applyDate: '14/04/2021 08:00:00',
    expiredDate: '14/04/2021 23:00:00',
    priceTicket: '90.000 VNĐ',
    priceCombo: '360.000 VNĐ/4 Vé',
    tags: ['Đang áp dụng'],
  },
  {
    key: '2',
    number: 2,
    id: 'ALT20210501',
    name: 'Gói sự kiện',
    applyDate: '14/04/2021 08:00:00',
    expiredDate: '14/04/2021 23:00:00',
    priceTicket: '20.000 VNĐ',
    priceCombo: '-',
    tags: ['Tắt'],
  },
  
  
];

const ListTickets = () => <Table className='list-tickets'  columns={columns} dataSource={data} />;


export default ListTickets;