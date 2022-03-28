const multer = require("multer");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `src/files`);
  },
  filename: function (req, file, cb) {
      console.log(req)
    cb(null, `pr${file.originalname}`);
  },
});

let update = multer({ storage });

module.exports = update;