import React from 'react';
import PropTypes from 'prop-types';
export const Cartproduct = (props)=>{
    return(
        <div className="cart">
        <h1>PRODUCT  NAME  : {props.item.name}</h1>
        <img src={props.item.url} alt="IMAGE NOT FOUND"/>
        <h3>PRICE IS {props.item.price}</h3>
        </div>
    );
}

Cartproduct.propTypes = PropTypes.shape({
    item:PropTypes.object,
}).isRequired