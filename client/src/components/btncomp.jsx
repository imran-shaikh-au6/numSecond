import React from "react";
import "../Pages/Home.css";
function btncomp(props) {
    const handleRegister = (e) => {
        props.history.push("/register");
    };
    const handleLogin = (e) => {
        props.history.push("/login");
    };
    return (
        <div className="parent">
            <div>
                <button
                    onClick={handleRegister}
                    className="child btn btn-warning"
                >
                    Register
                </button>
                <button onClick={handleLogin} className="child btn btn-warning">
                    Login
                </button>
            </div>
        </div>
    );
}

export default btncomp;
