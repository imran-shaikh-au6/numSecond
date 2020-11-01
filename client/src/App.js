import React, { Component } from "react";
import Register from "./components/Register";
import "./App.css";
import Navbar from "./Pages/Home";
import { Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./Redux/actions/setAuthToken";
import { setCurrentUser } from "./Redux/actions/userAction";
// import Login from "./components/Login";
import { connect } from "react-redux";
import btncomp from "./components/btncomp";
import Login from "./components/Login";
import TotalAsset from "./Pages/TotalAsset";
class App extends Component {
    componentDidMount() {
        if (localStorage.jwtToken) {
            setAuthToken(localStorage.jwtToken);
            const decode = jwt_decode(localStorage.jwtToken);
            this.props.setCurrentUser(decode);
        }
    }
    render() {
        return (
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={btncomp} />
                    <Route exact path="/dashboard" component={TotalAsset} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                </Switch>
            </div>
        );
    }
}
export default connect(null, { setCurrentUser, setAuthToken })(App);
