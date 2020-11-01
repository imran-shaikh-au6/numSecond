const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const user = new Schema({
    name: { type: String },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    image: {
        type: String,
    },
    addedAssets: {
        type: [String],
    },
    removedAssets: {
        type: [String],
    },
    date: {
        type: Date,
        default: Date.now,
    },
    token: {
        type: String,
        default: "",
    },
});
// user.pre("save", function (next) {
//     var user = this;
//     if (user.isModified("password")) {
//         bcrypt
//             .hash(user.password, 10)
//             .then(function (hashedPassword) {
//                 user.password = hashedPassword;
//                 next();
//             })
//             .catch(function (err) {
//                 next(err);
//             });
//     }
// });

user.statics.userFind = function (email, password) {
    var userObj = null;
    return new Promise(function (resolve, reject) {
        User.findOne({
            email: email,
        })
            .then(function (user) {
                console.log(user);
                if (!user) {
                    return reject("Incorrect Credintials");
                }
                userObj = user;
                return bcrypt.compare(password, user.password);
            })
            .then(function (isMatched) {
                if (!isMatched) return reject("Incorrect credentials");
                resolve(userObj);
            })
            .catch(function (err) {
                reject(err);
            });
    });
};
module.exports = User = mongoose.model("users", user);
