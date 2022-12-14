import React from 'react';
import { Button, Switch, Table } from 'antd';
import { MoreOutlined, SettingOutlined } from '@ant-design/icons';
import SearchBar from '../../elements/SearchBar';
import './Coupon.css';
import { ReactComponent as Filter } from '../../icons/filter.svg';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Code',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: 'Discount ',
    dataIndex: 'discount',
    key: 'discount',
  },
  {
    title: 'Start Date',
    dataIndex: 'startDate',
    key: 'startDate',
  },
  {
    title: 'End Date',
    dataIndex: 'endDate',
    key: 'endDate',
  },
  {
    title: 'Activate',
    key: 'activate',
    dataIndex: 'activate',
    render: (status) => <Switch checked={status} />,
  },
  {
    title: '',
    key: 'options',
    dataIndex: 'options',
    render: () => (
      <>
        <MoreOutlined />
      </>
    ),
  },
];

const data = [
  {
    key: '1',
    id: '01',
    code: '20% Off Entire Order ',
    discount: '20%',
    startDate: 'February 14 2021',
    endDate: 'February 17 2021',
    activate: true,
    options: '',
  },
];
const Coupon = () => {
  return (
    <div className="outerCoupon">
      <div className="couponPageHeader">
        <span className="sideMenuTitle">Coupon</span>
        <span>
          <Button
            type="primary"
            style={{
              backgroundColor: '#5541d7',
              fontFamily: 'MulishBold',
              minWidth: '120px',
              height: '40px',
              fontSize: '16px',
            }}
          >
            Create New
          </Button>
        </span>
      </div>
      <div className="innerCoupon">
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

export default Coupon;
