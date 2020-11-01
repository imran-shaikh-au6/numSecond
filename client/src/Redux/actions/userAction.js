import { RegisterUser, LoginUser } from "./userType";
import jwt_decode from "jwt-decode";
import setAuthToken from "./setAuthToken";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
// toast.configure();

export const RegisterUsers = (data1) => async (dispatch) => {
    console.log(data1.newUser);

    await axios
        .post("/user/register", data1.newUser)
        .then((res) => {
            if (res.status === 200) {
                alert("Registered successfully.");
                dispatch({ type: RegisterUser, payload: res.data.user });
            }
            dispatch({ type: RegisterUser, payload: res.data.user });
        })
        .catch((err) => {
            console.log(err.message);
        });
};
export const loginUsers = (data) => async (dispatch) => {
    console.log(data.newUser);
    await axios
        .post("/user/login", data.newUser)
        .then(async (data1) => {
            if (data1.status === 200) {
                setToken(data1.data.token, dispatch);
                const data = await axios.get("/user/aseets");
                console.log(data.data);
                dispatch({ type: "Assets", payload: data });

                data.history.push("/dashboard");
            }
            console.log(data1.data);
            // setToken(data1.data.token, dispatch);
        })
        .catch((err) => {
            console.log(err.response);
        });
};
export const addAsset = (data) => async (dispatch) => {
    console.log(data.newUser);
    await axios
        .post("/add-asset", data.newUser)
        .then((data1) => {
            if (data1.status === 200) {
                setToken(data1.data.token, dispatch);
                data.history.push("/");
            }
            console.log(data1.data);
            // setToken(data1.data.token, dispatch);
        })
        .catch((err) => {
            console.log(err.response);
        });
};
const setToken = (res, dispatch) => {
    // Save token to local storage
    const token = res;
    // Set token to ls
    localStorage.setItem("jwtToken", token);
    // Set token to Auth header
    setAuthToken(token);
    // Decode jwt token
    const decode = jwt_decode(token);
    // Set current user
    dispatch(setCurrentUser(decode));
};
export const setCurrentUser = (decode) => {
    return { type: LoginUser, payload: decode };
};
export const logoutUser = () => (dispatch) => {
    // Remove token from localStorage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future request
    setAuthToken(false);
    // Set current user to {} and isAuthenticator to false
    dispatch(setCurrentUser({}));
};
