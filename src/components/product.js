import React from "react";
import { store } from "../store/store";
export class Productone extends React.Component {
    constructor(props) {
        super(props);
    }
    addToCart(){
        store.dispatch({
            type:"ADD_TO_CART",
            payload:{
                counter:1,
                type:this.props.item.type,
                name:this.props.item.name,
                url:this.props.item.url,
                price:this.props.item.price
            }
        })
    }
  render() {


    return (
      <div className="product row  padding md-2">
        <h1 className="border border-danger  col-12">
          Type Of Product:{this.props.type}
        </h1>
        <p className="col-12 violet">Name Of The Product : {this.props.name}</p>
        <img
          className="set img-circle"
          src={this.props.url}
          alt="SORRY IMAGE NOT AVAILABLE"
        />
        <h4>
          PRICE IS <span className="price">{this.props.price}!</span>
        </h4>
        <button className="btn btn-danger" onClick={this.addToCart.bind(this)}>
          Add to Cart
        </button>
      </div>
    );
  }
}
