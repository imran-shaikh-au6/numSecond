import React, { Component } from "react";
import { RegisterUsers} from "../Redux/actions/userAction";
import { connect } from "react-redux";
import "./register.css";
class Register extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        city: "",
        contactNo: "",
        facebook: "",
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
        };

        const rgs = this.props.RegisterUsers(data);
        console.log(rgs);
    };
    componentWillReceiveProps(nextprops) {
        console.log(nextprops);
        if (nextprops.auth.RegisterUser._id) {
            this.props.history.push("/login");
        }
    }
    render() {
        const { errors } = this.props.auth;
        console.log(errors);
        return (
            <div className="container-fluid ">
                <div className="row mt-2">
                    <div className="col-md-2"></div>

                    <div className="col-md-5 text1">
                        <h3 className="display-6 text-center my-2">
                            Register Form
                        </h3>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group form-group-sm">
                                <label for="exampleInputPassword1">
                                    <b>User Name</b>
                                </label>
                                <input
                                    onChange={this.handleChange}
                                    type="text"
                                    placeholder="Enter Your Name"
                                    className="form-control input-sm "
                                    required="true"
                                    name="name"
                                />
                            </div>

                            <div className="form-group">
                                <label for="exampleInputEmail1">
                                    <b> Email Address</b>
                                </label>
                                <input
                                    type="email"
                                    className="form-control "
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    onChange={this.handleChange}
                                    name="email"
                                    required="true"
                                    placeholder="Enter Email Address"
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
                                    <b> Password</b>
                                </label>
                                <input
                                    type="password"
                                    className="form-control "
                                    id="exampleInputPassword1"
                                    onChange={this.handleChange}
                                    name="password"
                                    required="true"
                                    placeholder="Enter Your Password"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="btn btn-warning form-control"
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

const mapstateToProps = (state) => {
    return { auth: state.user };
};

export default connect(mapstateToProps, { RegisterUsers })(Register);
