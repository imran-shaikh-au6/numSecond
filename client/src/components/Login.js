import React, { Component } from "react";
import { loginUsers } from "../Redux/actions/userAction";
import { connect } from "react-redux";

import "./register.css";
class Login extends Component {
    state = {
        name: "",
        email: "",
        password: "",
    };
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        };
        const data = {
            newUser: newUser,
            history: this.props.history,
        };

        const rgs = this.props.loginUsers(data);

        console.log(rgs);
    };

    componentWillReceiveProps(nextprops) {
        console.log(nextprops.auth.user.id);
        if (nextprops.auth.user.id) {
            this.props.history.push("/dashboard");
        }
    }
    render() {
        return (
            <div className="container-fluid register">
                <div className="row mt-2">
                    <div className="col-md-2"></div>
                    <div className="col-md-5 text1">
                        <h3 className="display-6 text-center my-2">
                            Login Form
                        </h3>

                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label for="exampleInputEmail1">
                                    <b>Email address</b>
                                </label>
                                <input
                                    type="email"
                                    className="form-control form-control-lg"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    onChange={this.handleChange}
                                    name="email"
                                    placeholder="Enter Your Registered Email Address"
                                />
                                <small
                                    id="emailHelp"
                                    className="form-text text-muted"
                                >
                                    We'll never share your email with anyone
                                    else.
                                </small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">
                                    <b>Password</b>
                                </label>
                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    id="exampleInputPassword1"
                                    onChange={this.handleChange}
                                    name="password"
                                    placeholder="Enter Your Password"
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { auth: state.user };
};

export default connect(mapStateToProps, { loginUsers })(Login);
