import { combineReducers } from "redux";
import userReducer from "./userReducers";
// import productReducer from "./productReducers";


const rootReducer = combineReducers({
    user: userReducer,
    
});

export default rootReducer;
