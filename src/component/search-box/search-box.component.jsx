import React from 'react';
import './search-box.styles.css';


  export const SearchField = ({ placeholder, handleChange }) => (

    <input 
    className='search'
    type="search" 
    placeholder={placeholder}
    name='inputText' 
    onChange={handleChange} 
     />
      
)




