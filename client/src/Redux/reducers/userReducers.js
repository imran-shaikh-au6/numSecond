import {
    RegisterUser,
    LoginUser,
    Assets
} from "../actions/userType";
import isEmpty from "../../utils/is-Empty";
const INITIAL_STATE = {
    isAuthenticated: false,
    user: {},
    RegisterUser: {},
    Assets:null
};

const userReducer = (state = INITIAL_STATE, action) => {
    const type = action.type;
    const payload = action.payload;
    switch (type) {
        case RegisterUser: {
            return {
                ...state,
                RegisterUser: payload,
            };
        }
        case LoginUser: {
            return {
                ...state,
                user: action.payload,
                isAuthenticated: !isEmpty(action.payload),
            };
        }
        case Assets: {
            return {
                ...state,
                Assets: action.payload,
            };
        }
        default:
            return { ...state };
    }
};

export default userReducer;
