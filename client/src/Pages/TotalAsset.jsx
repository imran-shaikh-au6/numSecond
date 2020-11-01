import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import AddAssets from "./AddAssets";
import axios from "axios";
class TotalAsset extends Component {
  
    render() {
     
        return (
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                    </tbody>
                </table>
                <AddAssets />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state,
    };
};
export default connect(mapStateToProps)(withRouter(TotalAsset));
