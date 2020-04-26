import React, { Component } from 'react';

function  Dropdown(props)
{
    return(
<div className='mb20'> 
    <select id="sex" className='dropdown-layout' onChange={props.FilterData}>
            <option value="">default</option>
            <option value="Low">Low</option>
            <option value="High">High</option> 
    </select>	
</div>
    )
    
}
export default Dropdown;
