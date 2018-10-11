import React,{Component} from 'react';
import {Container} from './container/container';
import {Provider } from 'react-redux';
import { store } from './store/store';
import './App.css'
export default class App extends Component{
  render(){
      return(

          <div>
             <Container/>
          </div>
      )
  }
}