import React from 'react';
import { Space, Table, Tag } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import SearchBar from '../../elements/SearchBar';
import './Customer.css';
import { ReactComponent as Filter } from '../../icons/filter.svg';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => (
      <>
        <span style={{ fontFamily: 'MulishRegular' }}>{text}</span>
      </>
    ),
  },
  {
    title: 'Join Date',
    dataIndex: 'joinDate',
    key: 'joinDate',
  },
  {
    title: 'Total Visit',
    key: 'totalVisit',
    dataIndex: 'totalVisit',
  },
  {
    title: 'Purchased Items',
    key: 'purchasedItems',
    dataIndex: 'purchasedItems',
    render: (text) => (
      <>
        <span style={{ fontFamily: 'MulishRegular' }}>{text}</span>
        <br />
        <a style={{ fontFamily: 'MulishBlack', color: 'purple' }}>
          See Details
        </a>
      </>
    ),
  },
  {
    title: 'Total Spend',
    key: 'totalSpend',
    dataIndex: 'totalSpend',
  },
];
const data = [
  {
    key: '1',
    id: 'XXX1',
    name: 'John Brown',
    joinDate: '1 February 2021',
    totalVisit: '2',
    purchasedItems: 'americano(10);latte(8)',
    totalSpend: '$495.50',
  },
];
const Customer = () => {
  return (
    <div className="outerCustomer">
      <span className="sideMenuTitle">Customer</span>
      <div className="innerCustomer">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <SearchBar size={120} style={{ flex: 1, marginRight: '20px' }} />
          <Filter />
          <MoreOutlined className="icon" />
        </div>
        <Table
          className="customer-table"
          columns={columns}
          dataSource={data}
          pagination={false}
          style={{ margin: '20px 0 0 0' }}
        />
      </div>
    </div>
  );
};
export default Customer;
