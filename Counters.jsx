import React, { Component } from 'react';

import CounterCompt from './CounterCompt';





class Counters extends React.PureComponent {

  
    render() {
        const {onDelete, onIncrement,searchData,searchtxt}  = this.props;

        return ( <div>

           
        <h1 className='text-center mt-5'> TOP PLACES </h1>

           
     
           {searchData.length > 0 ? (
            searchData.map(counter  =>
            <CounterCompt counter={counter} key={counter.id} selected ={true} onDelete={onDelete} onIncrement ={onIncrement}> <h4> Section {counter.id} </h4>  </CounterCompt> )
           ) : (
               <div> No results found for {searchtxt}</div>
           )}
        
           </div> )
}}



export default Counters;