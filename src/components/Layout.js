import React from 'react';
import { Layout } from 'antd';
import FixedHeader from './Header';
import FixedSider from './Sider';

const HomeLayout = () => {
  return (
    <Layout
      style={{
        minHeight: '100vh',
        backgroundColor: '#f7f7fc',
        overflow: 'hidden',
      }}
    >
      <FixedHeader />
      <FixedSider />
    </Layout>
  );
};
export default HomeLayout;
