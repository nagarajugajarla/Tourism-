import React  from 'react';


const CounterView = props => {
const imagepath =  props.location.counterProps.value["imagepath"];
const name =  props.location.counterProps.value["name"];

    return(
    <div className='View-container'>
        <img src={ imagepath}  alt='mobile' className='img-view-cont'/>
        <a href="https://www.facebook.com?ecid=PSPSFloatingONICAT" className='btn btn-secondary btn-warning mr10'>Place Order </a>
    </div>
    )
}

export default CounterView;
