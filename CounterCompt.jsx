import React, { Component } from 'react';
// import { isNullOrUndefined } from 'util';
import {Link  } from "react-router-dom";


export default class CounterCompt extends Component {

    render() {
        return (

          <React.Fragment>

            <Link className='card-link-btn' to= {{

                   pathname : '/CounterPage',
                   counterProps :{
                     value:this.props.counter

                   }
                }}>

            <div className='products-container'>

                   <div className='img-container'>
                    <img src={this.props.counter.imagepath}  alt='mobile' className='img-content'/>
                  </div>
                 

                  <div class="title-pos1">
                       <p className='item-name font-weight-bolder text-capitalize'>  {this.props.counter.name} </p>
                  </div>

                   <div class="title-pos2">
                       <p className='text-capitalize item-sub-name'>  {this.props.counter.Address} </p>
                  </div>

                  {/* <div class="single_destination">

                  <div class="thumb">
                  <img src={this.props.counter.imagepath} alt="" />
                  </div>

                  <div class="content">
                  <p class="d-flex align-items-center">Italy <a href="travel_destination.html"> 07 Places</a> </p>
                  </div>

                  </div> */}






                  {/* <div className='display-inline item-head-cont'>
                      <span className='item-name font-weight-bolder text-capitalize'>  {this.props.counter.name} </span>
                      <span className='badge badge-pill badge-secondary'> {this.props.counter.star}</span>
                    <div className='item-sub font-weight-lighter'>{this.props.counter.Address} </div>
                  </div> */}


              </div>
              </Link>
            </React.Fragment>
        );
      }




    getBadgeNames() {
      let className = "badge badge-";
      className += (this.props.counter.value === 0) ? "warning" : "primary";
      return className;
    }

      formatCount(){
        const count = this.props.counter.value;
        return count === 0 ? "Go to cart" : "Added to cart";
      }


    }
