import React, { useState } from 'react';
import { List } from 'antd';
import Card from '../../elements/Card';
import './Category.css';
import SearchBar from '../../elements/SearchBar';
import useMediaQuery from 'use-media-antd-query';

const food = [
  {
    item: 'Shashimi',
    price: '22',
  },
  {
    item: 'Unagi - Grilled Eel',
    price: '22',
  },
  {
    item: 'Soba - Buckwheat Noodles',
    price: '22',
  },
  {
    item: 'Shashimi',
    price: '22',
  },
  {
    item: 'Unagi - Grilled Eel',
    price: '22',
  },
  {
    item: 'Soba - Buckwheat Noodles',
    price: '22',
  },
];

const items = [
  {
    label: 'All',
  },
  {
    label: 'Food',
  },
  {
    label: <a href="#drinks">Drinks</a>,
  },
  {
    label: <a href="#snacks">Snacks</a>,
  },
  {
    label: <a href="#packages">Packages</a>,
  },
];

const Category = () => {
  const [current, setCurrent] = useState(0);
  const colSize = useMediaQuery();

  return (
    <div className="outerCategory">
      <SearchBar style={{ marginBottom: '20px' }} />
      <div className="innerCategory">
        {items.map((val, i) => {
          return (
            <span
              className={
                current === i ? 'tabMenuHeaderSelected' : 'tabMenuHeader'
              }
              onClick={() => {
                setCurrent(i);
              }}
            >
              {val.label}
            </span>
          );
        })}
      </div>

      <div className="categoryMainContent">
        <div id="food">
          <h2 className="tabMenuTitle">Food</h2>

          <List
            className="demo-loadmore-list"
            itemLayout="horizontal"
            grid={
              colSize === 'xs' ||
              colSize === 'sm' ||
              colSize === 'md' ||
              colSize === 'lg'
                ? { column: 1 }
                : { column: 3 }
            }
            dataSource={food}
            renderItem={(item) => <Card item={item.item} price={item.price} />}
          />
        </div>
        <div id="drinks">
          <h2 className="tabMenuTitle">Drinks</h2>

          <List
            className="demo-loadmore-list"
            itemLayout="horizontal"
            grid={
              colSize === 'xs' ||
              colSize === 'sm' ||
              colSize === 'md' ||
              colSize === 'lg'
                ? { column: 1 }
                : { column: 3 }
            }
            dataSource={food}
            renderItem={(item) => <Card item={item.item} price={item.price} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
