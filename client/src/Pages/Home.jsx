import React, { useState } from "react";
import "./Home.css";
import { logoutUser } from "../Redux/actions/userAction";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
function Home(props) {
    const [btn, setBtn] = useState("/register");
    let URL = "/register";
    const handleLogout = (e) => {
        e.preventDefault();
        props.logoutUser();
        props.history.push("/");
    };
    const { isAuthenticated } = props.user.user;
    return (
        <div>
            <nav class="navbar navbar-light bg-warning">
                <a class="navbar-brand">Numocity</a>
                <form class="form-inline">
                    {isAuthenticated ? (
                        <button
                            onClick={handleLogout}
                            className="btn btn-outline-success my-2 my-sm-0"
                        >
                            Logout
                        </button>
                    ) : null}
                </form>
            </nav>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        user: state,
    };
};

export default connect(mapStateToProps, { logoutUser })(withRouter(Home));
