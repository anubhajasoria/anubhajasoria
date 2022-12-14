import React from 'react';
import { Input, Dropdown, Space, Button, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import './EditProduct.css';

const handleButtonClick = (e) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};
const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const items = [
  {
    label: '1st menu item',
    key: '1',
    // icon: <UserOutlined />,
  },
  {
    label: '2nd menu item',
    key: '2',
    // icon: <UserOutlined />,
  },
  {
    label: '3rd menu item',
    key: '3',
    // icon: <UserOutlined />,
  },
];

const EditProduct = () => {
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <div
      style={{
        margin: '30px',
        display: 'flex',
        flexWrap: 'nowrap',
        flex: ' 0 0 100%',
        flexDirection: 'column',
        borderRadius: 10,
      }}
    >
      <span className="sideMenuTitle">Edit Product</span>
      <form>
        <div
          style={{
            margin: '20px 0 0 0',
            padding: '20px',
            backgroundColor: '#ffff',
            borderRadius: 10,
          }}
        >
          <label>ID</label>
          <Input />
          <div className="selecImage">
            <div className="image"></div>
            <div className="selectImageContent">
              <span>Select Your Product Picture</span>
              <Button
                type="primary"
                style={{
                  backgroundColor: '#5541d7',
                  fontFamily: 'MulishBold',
                  width: '100px',
                  height: '35px',
                }}
              >
                Browse
              </Button>
            </div>
          </div>
          <label>Product Name</label>
          <Input />

          <label for="Category">Category</label>
          <div>
            <select
              name="category"
              id="category"
              style={{ fontFamily: 'MulishRegular' }}
            >
              <option value="food">Food</option>
              <option value="drinks">Drinks</option>
              <option value="snacks">Snacks</option>
              <option value="packages">Packages</option>
            </select>
          </div>
          <label>Price</label>
          <Input />
          <label>Description</label>
          <TextArea rows={5} />
        </div>

        <div style={{ paddingTop: '20px' }}>
          <span>
            <Button
              type="primary"
              style={{
                backgroundColor: '#5541d7',
                width: '80px',
                height: '45px',
                fontFamily: 'MulishBold',
              }}
            >
              Save
            </Button>
          </span>
          <span style={{ margin: '20px' }}>
            <Button
              type="text"
              style={{
                width: '80px',
                height: '45px',
                fontFamily: 'MulishBold',
                color: '#92929D',
              }}
            >
              Cancel
            </Button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
