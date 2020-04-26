import React, { Component } from 'react';
import UpdatedComponent from './CommonCounter.jsx'

class HoverClick extends Component {


    render() {

        const {count, IncrementCount } =this.props;

        return (
            <div>
                <h2 onMouseOver ={IncrementCount} > Hovered {count} times </h2>
            </div>
        );
    }
}

export default UpdatedComponent(HoverClick);