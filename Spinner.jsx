import React, { Component } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner';


export default class Spinner extends React.Component {
    render() { 
        return ( 
            <div className='Spinner'>
                <Loader type="Circles" color="#00BFFF"
                height={100}
                width={100}
                timeout={900}  visible={true} />
            </div>
         );
    }
}
