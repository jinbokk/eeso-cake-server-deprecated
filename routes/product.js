const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

router.post("/", upload.single("image"), async (req, res) => {
  // upload.single("product") == input type=file , name = "product"
  try {
    const result = await cloudinary.uploader.upload(req.file.path, null, {
      use_filename: true,
      unique_filename: true,
      folder: "eeso-cake-product-images",
    });
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
