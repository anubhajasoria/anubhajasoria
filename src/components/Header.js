import React from 'react';
import { Header } from 'antd/es/layout/layout';
import './Header.css';
import { BellOutlined } from '@ant-design/icons';

const FixedHeader = () => {
  return (
    <Header className="header">
      <div className="mainHeader">
        <span className="greySquare" />
        <span style={{ fontSize: '18px' }}> Dazzie</span>
      </div>
      <div className="user">
        <BellOutlined className="bellIcon" />
        <span
          className="greySquare"
          style={{
            borderRadius: 35,
          }}
        />
        <div className="userName">
          <span>Sumanto</span>
          <br />
          <span
            style={{
              fontFamily: 'MulishRegular',
              color: '#92929D',
              fontSize: '12px',
            }}
          >
            Cashier
          </span>
        </div>
      </div>
    </Header>
  );
};
export default FixedHeader;
