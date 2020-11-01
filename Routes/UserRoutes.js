const express = require("express");
const User = require("../models/User");
// const auth = require("../../Middleware/auth")
const router = express.Router();
const passport = require("passport");
const {
    registerUser,
    loginUser,
    addToAssets,
    removedAssets,
    getAssets,
} = require("../controller/ApiController");

// const {
//     getUserProfile,
//     getWishList,
//     getMyProduct,
// } = require("../../Controllers/NormalControllers/userNormalController");

// router.get(
//     "/userProfile/:id",
//     passport.authenticate("jwt", { session: false }),
//     getUserProfile
// );
// router.get(
//     "/userWishList",
//     passport.authenticate("jwt", { session: false }),
//     getWishList
// );
// router.get(
//     "/userMyPro",
//     passport.authenticate("jwt", { session: false }),
//     getMyProduct
// );

router.post("/user/register", registerUser);
router.post("/user/login", loginUser);
router.post(
    "/add-asset",
    passport.authenticate("jwt", { session: false }),
    addToAssets
);
router.get(
    "/user/aseets",
    passport.authenticate("jwt", { session: false }),
    getAssets
);
// router.post(
//     "/user/editprofile",
//     passport.authenticate("jwt", { session: false }),
//     upload.single("image"),
//     editprofile
// );
// router.post(
//     "/user/addTowishlist/:productId",
//     passport.authenticate("jwt", { session: false }),
//     addTowishlist
// );
// router.post(
//     "/user/deleteFromWishList/:productId",
//     passport.authenticate("jwt", { session: false }),
//     deleteFromWishList
// );

// router.post(
//     "/userEmailDetails/:product_id",
//     passport.authenticate("jwt", { session: false }),
//     userEmailDetails
// );
// router.post("/userForgetPassword", forgetpassword);
// router.post("/updatePassword", updatePassword);

module.exports = router;
