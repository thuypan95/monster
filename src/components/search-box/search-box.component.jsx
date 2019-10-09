import React from 'react';
import './search-box.styles.css';
export const SearchBox = ({props,handleChange}) => {
    return (
            <input 
            className="search"
            type="text" 
            placeholder="search monster" 
            onChange={handleChange}
        />
    )
}