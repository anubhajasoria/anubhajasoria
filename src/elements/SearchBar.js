import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import './SearchBar.css';

const SearchBar = ({ style = {} }) => {
  return (
    <div className="searchBox" style={style}>
      <SearchOutlined className="searchIcon" />
      <form>
        <input className="searchInput" placeholder="Search Here..." />
      </form>
    </div>
  );
};

export default SearchBar;
