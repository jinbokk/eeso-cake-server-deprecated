const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const Product = require("../models/product");

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.unsigned_upload(
      req.file.path,
      "eeso-cake-upload-preset"
    );

    console.log("result : ", result);

    let product = new Product({
      name: req.file.path,
      ingredient: req.body.ingredient,
      layer: req.body.layer,
      design: req.body.design,
      description: req.body.description,
      image_path: result.secure_url,
    });

    await product.save();

    console.log(product);

    res.json(product);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

// const router = require("express").Router();
// const cloudinary = require("../utils/cloudinary");
// const cloudinarySignature = require("../utils/cloudinary_signature");
// const upload = require("../utils/multer");

// router.post("/", upload.single("image"), async (req, res) => {
//   try {
//     const result = await cloudinary.uploader
//       .upload(req.file.path, "eeso-cake-upload-preset", {
//         signature: cloudinary_signature,
//         api_key: process.env.CLOUDINARY_API_KEY,
//         use_filename: true,
//         unique_filename: false,
//         folder: "eeso-cake-product-images",
//       })
//       .then((result) => console.log(result));
//     res.json(result);
//   } catch (error) {
//     console.log(error);
//   }
// });

// module.exports = router;
