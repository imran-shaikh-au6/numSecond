import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <div>
                <nav
                    class="navbar"
                    style={{
                        backgroundColor: "#2c5282",
                        height: "3em",
                        paddingTop: "10px",
                        borderTopLeftRadius: "12px",
                        borderTopRightRadius: "12px",
                        bottom:"0px",
                        position: "fixed",
                        width:"100%"
                    }}
                >
                    <center>
                        <a
                            class="navbar-brand"
                            style={{
                                color: "white",
                                letterSpacing: "1px",
                                fontSize: "23px",
                            }}
                        >
                            Fullstack Challenge - 2020
                        </a>
                    </center>
                </nav>
            </div>
        );
    }
}
export default Footer;
