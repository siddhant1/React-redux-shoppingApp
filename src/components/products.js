import React, { Component } from "react";
import { store } from "../store/store";
import { Productone } from "./product";
import { connect } from "react-redux";

class Product extends Component {
  static added;
  constructor(props) {
    super(props);
    this.state = {
      bool:false
    }
  }
  load() {
    if(!this.props.bool){
      store.dispatch({
        type: "ADD_DEFAULT_PRODUCTS",
        payload: fetch(
          "https://gist.githubusercontent.com/siddhant1/d445c27dc6ae473673bfec3207dac6e0/raw/f63089233466557f93107c544ae3df9e2d581860/json.txt"
        ).then(res => res.json())
      });
      this.props.fn();
    }
  }
  render() {
    return (
      <div className="container">
        <button onClick={this.load.bind(this)} className="btn btn-primary">
          LOAD  PRODUCTS?
        </button>
        {console.log(this.props)}
        {this.props.error=="" ? (
          this.props.products.map(item => <Productone key={item.name} item={item}
          name={item.name} url={item.url} type={item.type} price={item.price} />)
        ) : (
          <p>{this.props.error}</p>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log("MAP STATE", state);
  return {
    products: state.product.productArr,
    error:state.product.error
  };
};
export default connect(mapStateToProps)(Product);
