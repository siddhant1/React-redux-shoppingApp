import React from "react";
import { store } from "../store/store";
import { Productone } from "./product";
import {connect} from 'react-redux';
import {MasterProduct} from '../components/masterProduct'

export class Master extends React.Component {
  constructor(props) {
    super(props);
    this.InitialMaster = this.InitialMaster.bind(this);
    this.commit = this.commit.bind(this);
  }

  InitialMaster(event){
    event.preventDefault();
    if(this.type.value && this.name.value && this.url.value ){
      store.dispatch({
        type:"INITIAL_ADD",
        payload:{
          tempProduct:{
            name:this.name.value,
            type:this.type.value,
            url:this.url.value,
            price:this.price.value,
          }
        }
      })
    }
    else{
      alert("ENTER ALL THE CREDENTIALS PLZ");
    }
  }
commit(event){
  if(this.props.master !=[]){
       event.preventDefault();
       store.dispatch({
         type:"COMMIT_CHANGES",
         payload:this.props.master
       })
  }
}

  render() {
    return (
       
      <div className="form-group">
        <form>
          <h2>Enter the Type Of Product</h2>
          <input
            ref={input => (this.type = input)}
            className="form-control"
            type="text"
          />
          <h2>Enter the name of product</h2>
          <input
            ref={input => (this.name = input)}
            className="form-control"
            type="text"
          />
          <h2>Enter the url of the image</h2>
          <input
            ref={input => (this.url = input)}
            className="form-control"
            type="text"
          />
          <h2>Enter the price </h2>
          <input
          ref={input=>(this.price=input)}
          className="form-control"
          type="text"/>
          <button className="btn btn-primary" onClick={this.InitialMaster}>
            Add to DataBase
          </button>
          <button onClick={this.commit} className="btn btn-info">COMMIT CHANGES FOR USER</button>
        </form>
        {this.props.master.map((item)=>{
          return <MasterProduct item={item} />
        })}
      </div>
    );
  }
}
  const mapStateToProps = state =>{
    console.log(state);
   return{
     master:state.product.masterArr
   }
}

export default connect(mapStateToProps)(Master);
