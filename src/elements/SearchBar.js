import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import './SearchBar.css';

const SearchBar = ({ size = 100, style = {} }) => {
  return (
    <div className="searchBox" style={style}>
      <SearchOutlined className="searchIcon" />
      <form>
        <input
          className="searchInput"
          size={size}
          placeholder="Search Here..."
        />
      </form>
    </div>
  );
};

export default SearchBar;
