import {createStore,applyMiddleware} from 'redux';

import {todoReducer} from './reducers/todoreducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


 const STORE = createStore(todoReducer,composeWithDevTools(applyMiddleware(thunk)));

 export default STORE;