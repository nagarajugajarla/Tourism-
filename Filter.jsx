import React, { Component } from 'react';




function Filter (props) {

        return (
            <div className='Filterbanner'>
         <div className='position-relative'> 
            <input type="text" onChange={props.searchData} className='search-input'/>
            <img src='/Images/search-icon.webp'  alt='mobile' className='search-icon icon-pos'/>
        </div>
</div>
        )
                 
    }




export default Filter;

