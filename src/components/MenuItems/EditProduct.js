import React from 'react';
import { Input, Button } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import './EditProduct.css';

const EditProduct = () => {
  return (
    <div className="outerEditProduct">
      <span className="sideMenuTitle">Edit Product</span>
      <form>
        <div className="innerForm">
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
