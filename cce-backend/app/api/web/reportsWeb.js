const { Router, response } = require("express");
const ReportsWebTable = require("../../reportsweb/table");
const router = new Router();
const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../assets/web/reports"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname +
        "-" +
        Date.now() +
        "." +
        file.originalname.substring(1 + file.originalname.lastIndexOf("."))
    );
  },
});

var upload = multer({ storage: storage });

router.get("/all", (req, res, next) => {
  ReportsWebTable.getAll()
    .then((news) => {
      res.json(news);
    })
    .catch((error) => next(error));
});

router.get("/allAdmin", (req, res, next) => {
  ReportsWebTable.getAllAdmin()
    .then((news) => {
      res.json(news);
    })
    .catch((error) => next(error));
});

router.post("/insert", upload.any(), (req, res, next) => {
  const image =
    "http://103.119.92.91:3050/web/reports/" + req.files[0].filename;
  const file = "http://103.119.92.91:3050/web/reports/" + req.files[1].filename;
  ReportsWebTable.insert({ image, file })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.put("/delete", (req, res, next) => {
  const { id } = req.body;
  ReportsWebTable.delete({ id })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

module.exports = router;
