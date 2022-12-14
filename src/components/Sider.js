import React, { useState } from 'react';
import { AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Layout } from 'antd';
import Category from './MenuItems/Category';
import Customer from './MenuItems/Customer';
import './Sider.css';
import { ReactComponent as CustomerIcon } from '../icons/customer.svg';
import { ReactComponent as Order } from '../icons/orders.svg';
import { ReactComponent as Package } from '../icons/Package.svg';
import { ReactComponent as CouponDiscount } from '../icons/Coupon Discount.svg';
import { ReactComponent as User } from '../icons/user.svg';
import EditProduct from './MenuItems/EditProduct';
import Coupon from './MenuItems/Coupon';

const { Sider, Content } = Layout;
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('', 'sub1', <AppstoreOutlined />),
  getItem('', 'sub2', <Order />),
  getItem('', 'sub3', <CustomerIcon />),
  getItem('', 'sub4', <Package />),
  getItem('', 'sub5', <CouponDiscount />),
  getItem('', 'sub6', <User />),
];
const FixedSider = () => {
  const [display, setDisplay] = useState('sub1');
  const onClick = (e) => {
    setDisplay(e.key);
  };

  function selectedMenu(param) {
    switch (param) {
      case 'sub1':
        return <Category />;
      case 'sub2':
        return;
      case 'sub3':
        return <Customer />;
      case 'sub4':
        return <EditProduct />;
      case 'sub5':
        return <Coupon />;
      default:
        return <Category />;
    }
  }

  return (
    <>
      <Layout hasSider className="siderLayout">
        <Sider theme="light" collapsed>
          <Menu
            onClick={onClick}
            defaultSelectedKeys={['sub1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
          />
        </Sider>
        <Content className="mainContent">{selectedMenu(display)}</Content>
      </Layout>
    </>
  );
};

export default FixedSider;
