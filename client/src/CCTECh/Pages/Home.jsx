import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div>
                <nav
                    class="navbar"
                    style={{
                        backgroundColor: "#2c5282",
                        height: "3em",
                        paddingTop: "10px",
                        borderBottomLeftRadius: "12px",
                        borderBottomRightRadius: "12px",
                    }}
                >
                    <center>
                        <a
                            class="navbar-brand"
                            style={{
                                color: "white",
                                letterSpacing: "1px",
                                fontSize: "30px",
                            }}
                        >
                            Gallery
                        </a>
                    </center>
                </nav>
            </div>
        );
    }
}
export default Home;
