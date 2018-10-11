import {createStore,applyMiddleware,compose} from 'redux';
import {RootReducer} from '../reducers/rootreducer';
import promiseMiddleware from 'redux-promise-middleware';

export const store  = createStore(RootReducer,
    {},
    compose(
        applyMiddleware(promiseMiddleware()),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      )
    );

store.subscribe(()=>{
    console.log(store.getState());
})