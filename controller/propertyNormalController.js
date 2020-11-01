const Property = require("../models/image");

module.exports = {
    getImages: (req, res) => {
        Property.find()
            .sort({ _id: -1 })
            .then(function (property) {
                const a = property.map((a) => {
                    return a.image[0];
                });

                res.send(a);
            })
            .catch(function (err) {
                console.log(err.message);
            });
    },
};
