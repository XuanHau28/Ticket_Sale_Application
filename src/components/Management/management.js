import React from 'react'
import Search from "../../assets/images/Search.svg";
import Filter from '../../assets/images/Filter.svg';
import '../Management/managementStyle.css'
import { Space, Table, Tag } from 'antd';
const columns = [
    {
      title: 'STT',
      dataIndex: 'number',
      key: 'number',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Booking code',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Số vé',
      dataIndex: 'ticketNumber',
      key: 'ticketNumber',
    },
    {
        title: 'Tình trạng sử dụng',
        dataIndex: 'tags',
        key: 'tags',
        render: (_, { tags }) => (
            <>
              {tags.map((tag) => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
      
                if (tag === 'loser') {
                  color = 'volcano';
                }
      
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
      },
      {
        title: 'Ngày sử dụng',
        dataIndex: 'useDate',
        key: 'useDate',
      },
      {
        title: 'Ngày xuất vé',
        dataIndex: 'releaseDate',
        key: 'releaseDate',
      },
    {
      title: 'Cổng check - in',
      key: 'gate',
      dataIndex: 'gate',
      
    },
  ];
  const data = [
    {
      key: '1',
      number: 1,
      code: 'ALTFGHJU',
      ticketNumber: 123456789034,
      tags: ['Đã sử dụng'],
      useDate: '14/04/2021',
      releaseDate: '14/04/2021',
      gate: 'Cổng 1'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  
export default function management() {
  return (
    <div className='content'>
        <h1 style={{ marginLeft:24}}>Danh sách vé</h1>
        
        <input className='SearchList' type="search" placeholder='Search' /> <img className='SearchIcon' src={Search} />
        <ul className='Filter'>
            <li><button><img src={Filter} />Lọc vé</button></li>
            <li><button>Xuất file </button></li>
        </ul>
        <Table className="TicketList" columns={columns} dataSource={data} />
    </div>
  )
}
