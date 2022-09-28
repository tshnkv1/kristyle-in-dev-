import {applyMiddleware, compose, createStore} from "redux";
import RootReducer from './reducers/RootReducer';

const middlewareEnhancer = applyMiddleware();

const enhancerList = [];
if(window.__REDUX_DEVTOOLS_EXTENSION__) enhancerList.push(window.__REDUX_DEVTOOLS_EXTENSION__());
const composeEnhancers = compose(middlewareEnhancer, ...enhancerList);

const store = createStore(RootReducer, composeEnhancers);

export default store;
