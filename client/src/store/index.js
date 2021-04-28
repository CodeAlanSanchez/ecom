import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import { productReducer } from '../reducers';

const reducers = combineReducers({
  products: productReducer,
});

export default createStore(reducers, compose(applyMiddleware(thunk)));
