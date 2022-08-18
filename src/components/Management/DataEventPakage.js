import React from 'react'
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
        title: 'Tên sự kiện',
        dataIndex: 'eventName',
        key: 'eventName'

    },
    {
        title: 'Tình trạng sử dụng',
        dataIndex: 'tags',
        key: 'tags',
        render: (_, { tags }) => (
            <>
              {tags.map((tag) => {
                let color = tag.length > 8 && tag.length < 12 ? 'geekblue' : 'green';
      
                if (tag === 'Hết hạn') {
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
  const datas = [
    {
      key: '1',
      number: 1,
      code: 'ALTFGHJU',
      ticketNumber: 123456789034,
      eventName:"Hội chợ triển lãm tiêu dùng 2021",
      tags: ['Đã sử dụng'],
      useDate: '14/04/2021',
      releaseDate: '14/04/2021',
      gate: 'Cổng 1'
    },
    {
        key: '2',
        number: 2,
        code: 'ALTOJMNB',
        ticketNumber: 236784631642,
        eventName:"Hội chợ triển lãm tiêu dùng 2021",
        tags: ['Chưa sử dụng'],
        useDate: '14/04/2021',
        releaseDate: '14/04/2021',
        gate: '-'
      },
      {
        key: '3',
        number: 3,
        code: 'ALTQTYJH',
        ticketNumber: 487621489474,
        eventName:"Hội chợ triển lãm tiêu dùng 2021",
        tags: ['Hết hạn'],
        useDate: '14/04/2021',
        releaseDate: '14/04/2021',
        gate: '-'
      },
      {
        key: '4',
        number: 4,
        code: 'ALTCFSDF',
        ticketNumber: 156464891479,
        eventName:"Hội chợ triển lãm tiêu dùng 2021",
        tags: ['Hết hạn'],
        useDate: '14/04/2021',
        releaseDate: '14/04/2021',
        gate: '-'
      },
      {
        key: '1',
        number: 1,
        code: 'ALTFGHJU',
        ticketNumber: 123456789034,
        eventName:"Hội chợ triển lãm tiêu dùng 2021",
        tags: ['Đã sử dụng'],
        useDate: '14/04/2021',
        releaseDate: '14/04/2021',
        gate: 'Cổng 1'
      },
      {
        key: '1',
        number: 1,
        code: 'ALTFGHJU',
        ticketNumber: 123456789034,
        eventName:"Hội chợ triển lãm tiêu dùng 2021",
        tags: ['Đã sử dụng'],
        useDate: '14/04/2021',
        releaseDate: '14/04/2021',
        gate: 'Cổng 1'
      },
      {
        key: '1',
        number: 1,
        code: 'ALTFGHJU',
        ticketNumber: 123456789034,
        eventName:"Hội chợ triển lãm tiêu dùng 2021",
        tags: ['Đã sử dụng'],
        useDate: '14/04/2021',
        releaseDate: '14/04/2021',
        gate: 'Cổng 1'
      },
      {
        key: '1',
        number: 1,
        code: 'ALTFGHJU',
        ticketNumber: 123456789034,
        eventName:"Hội chợ triển lãm tiêu dùng 2021",
        tags: ['Đã sử dụng'],
        useDate: '14/04/2021',
        releaseDate: '14/04/2021',
        gate: 'Cổng 1'
      },
      {
        key: '1',
        number: 1,
        code: 'ALTFGHJU',
        ticketNumber: 123456789034,
        eventName:"Hội chợ triển lãm tiêu dùng 2021",
        tags: ['Đã sử dụng'],
        useDate: '14/04/2021',
        releaseDate: '14/04/2021',
        gate: 'Cổng 1'
      },
      {
        key: '1',
        number: 1,
        code: 'ALTFGHJU',
        ticketNumber: 123456789034,
        eventName:"Hội chợ triển lãm tiêu dùng 2021",
        tags: ['Đã sử dụng'],
        useDate: '14/04/2021',
        releaseDate: '14/04/2021',
        gate: 'Cổng 1'
      },
      {
        key: '1',
        number: 1,
        code: 'ALTFGHJU',
        ticketNumber: 123456789034,
        eventName:"Hội chợ triển lãm tiêu dùng 2021",
        tags: ['Đã sử dụng'],
        useDate: '14/04/2021',
        releaseDate: '14/04/2021',
        gate: 'Cổng 1'
      },
      {
        key: '1',
        number: 1,
        code: 'ALTFGHJU',
        ticketNumber: 123456789034,
        eventName:"Hội chợ triển lãm tiêu dùng 2021",
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
      tags: ['Hết hạn'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['Chưa sử dụng', 'teacher'],
    },
  ];
export default function data() {
  return (
      <Table className="TicketList" columns={columns} dataSource={datas} />
  )
}
