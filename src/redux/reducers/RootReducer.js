import {combineReducers} from "redux";
import DefaultReducer from './DefaultReducer';

const RootReducer = combineReducers({
        default: DefaultReducer,
    }
);

export default RootReducer;