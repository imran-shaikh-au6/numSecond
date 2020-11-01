import React, { Component } from "react";
import "./Image.css";
class Images extends Component {
    render() {
        
        return (
            <div className="innerWrap">
                <center>
                    <img
                        src={this.props.data}
                        className="card-img-top imgg"
                        alt="..."
                    />{" "}
                </center>
                <center>
                    <div className="card-body">
                        <a style={{ color: "#4299e1" }}>
                            Image {this.props.val}
                        </a>
                    </div>
                </center>
            </div>
        );
    }
}

export default Images;
