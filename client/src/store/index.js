import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import { productReducer, cartReducer } from '../reducers';

const reducers = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

export default createStore(reducers, compose(applyMiddleware(thunk)));
