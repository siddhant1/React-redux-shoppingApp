import React from 'react';
import Master from '../components/master';
import Product from '../components/products';
import Cart from '../components/cart'
import{
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink
} from 'react-router-dom';
import { store } from '../store/store';
export class Container extends React.Component{
    constructor(props) {
        
        super(props);
        this.state={
            defaultRender :false
        }
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(object){
        store.dispatch({
           type:"ADD_TO_CART",
           payload:object
        })
    }
    changeChild(){
        this.setState({
            defaultRender:true
        })
    }
    render(){
        return(
            <div className="d-flex flex-column flex-1">
                <NavLink to="/" >PRODUCTS</NavLink>
                <NavLink to="/master">Master(Admin)</NavLink>
                <NavLink to="/cart">Cart</NavLink>
                <hr/>
                <Route exact path="/" render={()=><Product fn={this.changeChild.bind(this)}/>}/>  
                <Route  path="/master" component={Master} />
                <Route  path="/cart" component={Cart} />
            </div>
        );
    }
}