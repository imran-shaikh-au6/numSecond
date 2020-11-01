import React, { Component } from "react";
import axios from "axios";
class AddAssets extends Component {
    handleData = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const cost = e.target.cost.value;
        const description = e.target.description.value;
        const totalData = {
            title: title,
            cost: cost,
            description: description,
        };
        const config = {
            headers: {
                "content-type": "application/json",
            },
        };
        const data = await axios.post("/add-asset", totalData, config);
        if (data.status === 200) {
            alert("Asset Added");
            window.location.reload();
        }
    };
    render() {
        return (
            <div>
                <h3>Add New Assets</h3>
                <form onSubmit={this.handleData}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter Asset Name"
                        required="true"
                    />
                    <br /> <br />
                    <input
                        type="text"
                        name="cost"
                        placeholder="Enter Asset Cost"
                        required="true"
                    />
                    <br /> <br />
                    <input
                        type="text"
                        placeholder="Add Description (max 100 words)"
                        name="description"
                        required="true"
                    />
                    <br /> <br />
                    <input className="btn btn-warning" type="submit" />
                </form>
            </div>
        );
    }
}

export default AddAssets;
