import React from "react";
import { connect } from "react-redux";
import {store} from '../store/store';
import { Cartproduct } from "./cartProduct";
import PropTypes from 'prop-types';
export class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(recievedObject) {
    store.dispatch({
        type:"ADD_TO_CART",
        payload:recievedObject
    })
  }

  render() {
    return (
      <div>
        {this.props.cart.map((item)=><Cartproduct key={item.name} item={item} />)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};
export default connect(mapStateToProps)(Cart);

Cart.propTypes = PropTypes.shape({
    cart:PropTypes.array,
}).isRequired