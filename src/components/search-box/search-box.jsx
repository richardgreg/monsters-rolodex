import React from 'react';

import './search-box.css';

export const SearchBox = ({ placeholder, handleChange }) => (
  <div id='cover'>
    <div className='tb'>
      <div className='td'>
        <input
          className='search'
          type='search'
          placeholder={ placeholder }
          onChange={ handleChange }
        />
      </div>
    </div>
  </div>
    
);
