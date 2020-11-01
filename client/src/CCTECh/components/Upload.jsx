import React, { useState } from "react";
import "./Upload.css";
import axios from "axios";
import imggg from "../images/upload.svg";
const Upload = () => {
    const [spin, setSpin] = useState(false);
    const handleNewPost = (e) => {
        e.preventDefault();

        // getting input files and checking its extension as images using regex
        const filePath = e.target.files[0].name;
        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        const data = new FormData();
        data.append("image", e.target.files[0]);
        // if file type is images then only allowed to forward backend to process
        if (!allowedExtensions.exec(filePath)) {
            alert("Invalid file type");
            return false;
        } else {
            setSpin(true);
            const config = {
                headers: {
                    "content-type": "multipart/form-data",
                },
            };
            axios
                .post("/add-images", data, config)
                .then(function (res) {
                    if (res.status === 200) {
                        window.location.reload();
                    }
                })
                .catch(function (err) {
                    console.log(err.message);
                });
        }
    };

    return (
        <div className="container" style={{ backgroundColor: "#ebf8ff" }}>
            <div>
                {/* Codepen Code Implemented for Button */}
                <div className="upload-btn-wrapper">
                    <button className="btn1">
                        <img className="icon1" src={imggg} /> Upload{" "}
                    </button>
                    <input type="file" name="file" onChange={handleNewPost} />
                </div>
                {spin === false ? null : <div class="loader"></div>}
            </div>
        </div>
    );
};

export default Upload;
