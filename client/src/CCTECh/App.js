import Home from "./Pages/Home";
import { Component } from "react";
import Spinner from "./components/Spinner";
import Upload from "./components/Upload";
import axios from "axios";
import Images from "./Pages/Images";
import Footer from "./Pages/Footer";
import "./App.css";
class App extends Component {
    state = {
        data: null,
    };

    async componentDidMount() {
        // axios call to fetch the data from backend
        const data = await axios.get("/get-images");
        //storing the fetched data in state

        this.setState({ data: data.data });
    }

    render() {
        return (
            <div className="container" style={{ backgroundColor: "#ebf8ff" }}>
                {/* navbar component */}
                <Home />
                {/* upload functionality */}
                <center>
                    <Upload />
                </center>
                {/* spinner (codepen) before data load and Images component to show data after fetch */}
                {this.state.data === null ? (
                    <Spinner />
                ) : (
                    <div className="wrapFirst">
                        {this.state.data.map((d, i) => (
                            <Images data={d} val={i + 1} />
                        ))}
                    </div>
                )}
                {/* footer component */}
                <Footer />
            </div>
        );
    }
}

export default App;
