const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Product = require("../models/Assets");

module.exports = {
    registerUser: async (req, res) => {
        //checking for validation
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            return res
                .status(400)
                .json({ message: "Email Already Exists, Please Login" });
        } else {
            const newUser = new User({
                name: req.body.name,
                image: "https://www.gravatar.com/avatar/anything?s=200&d=mm",
                email: req.body.email,
                password: req.body.password,
            });
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then((user) =>
                            res.json({
                                message:
                                    "Registered successfully. You can log in now",
                                user: user,
                                status: 201,
                            })
                        )
                        .catch((err) => console.log(err));
                });
            });
        }
    },
    loginUser: async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;
        User.userFind(email, password)
            .then((user) => {
                if (!user) {
                    return res
                        .status(404)
                        .json({ message: "Invalid Creadintials" });
                }
                const payload = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    addedAssets: user.addedAssets,
                    removedAssets: user.removedAssets,
                };
                jwt.sign(
                    payload,
                    "secret key",
                    { expiresIn: 60 * 60 * 30 },
                    (err, token) => {
                        res.json({
                            message: "Logged in Successfully",
                            token: token,
                        });
                    }
                );
            })
            .catch((err) => {
                res.status(401).json({ message: "Incorrect Credentials" });
            });
    },

    addToAssets: async (req, res) => {
        const title1 = req.body.title;

        const newProduct = {
            user: req.user.id,
            title: req.body.title,
            cost: req.body.cost,
            description: req.body.description,
        };

        let newPro = new Product(newProduct);
        newPro
            .save()
            .then((savedProduct) => {
                User.findByIdAndUpdate(
                    { _id: savedProduct.user },
                    { $push: { addedAssets: savedProduct._id } },
                    { new: true }
                )
                    .then((user) =>
                        res.json({
                            massage: "added Succesfully",
                            data: user,
                        })
                    )
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
    },
    removedAssets: async (req, res) => {
        const userid = req.user.id;
        const productId = req.params.productId;

        await User.updateOne(
            { _id: userid },
            {
                $pullAll: { removedAssets: [productId] },
            }
        )
            .then((data) => {
                res.status(201).json({
                    message: "Removed Succesfully",
                    data: data,
                });
            })
            .catch((error) => {
                res.status(404).send("user not found");
            });
    },
    getAssets: async (req, res) => {
        const userId = req.user.id;
        try {
            const userProducts = await User.findById(userId);
            const myProduct = userProducts.addedAssets;

            const favourite = myProduct;
            const arr = [];
            for (i = 0; i < favourite.length; i++) {
                var properties = await Product.find({ _id: favourite[i] });
                arr.push(properties);
            }
            res.status(200).json(arr);
        } catch (error) {
            res.status(400).send("No products found in Wishlist");
            console.log(error);
        }
    },
};
