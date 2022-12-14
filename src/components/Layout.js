import React from 'react';
import { Layout } from 'antd';
import FixedHeader from './Header';
import FixedSider from './Sider';
import './Layout.css';

const HomeLayout = () => {
  return (
    <Layout className="mainLayout">
      <FixedHeader />
      <FixedSider />
    </Layout>
  );
};
export default HomeLayout;
