let express = require("express");
const dotenv = require("dotenv");
var cors = require("cors");
dotenv.config();
const passport = require("passport");
require("./config/passport")(passport);
// const userRoutes = require("./Routes/userRoutes");
const propertyRoutes = require("./Routes/UserRoutes");
const PORT = process.env.PORT || 5000;
require("./db");
const path = require("path");
const app = express();
app.use(passport.initialize());
app.use(express.json());
app.use(cors());
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(express.static("client/build"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

// app.use(userRoutes);
app.use(propertyRoutes);

app.listen(PORT, () => {
    console.log("server started");
});
