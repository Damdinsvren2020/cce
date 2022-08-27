const { Router, response } = require("express");
const SliderWebTable = require("../../sliderweb/table");
const router = new Router();
const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../assets/web/slider"));
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
    SliderWebTable.getAll()
    .then((news) => {
      res.json(news);
    })
    .catch((error) => next(error));
});

router.post("/detail", (req, res, next) => {
  const { id } = req.body;
  SliderWebTable.getDetail({ id })
    .then((news) => res.json(news))
    .catch((error) => next(error));
});

router.post("/insert", upload.single("file"), (req, res, next) => {
  const image = "http://103.119.92.91:3050/web/slider/" + req.file.filename;
  const { title, text } = req.body;
  SliderWebTable.insert({ title, text, image })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.put("/update", (req, res, next) => {
  const { id, title, text, image } = req.body;
  SliderWebTable.update({ id, title, text, image })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.put("/updateFile", upload.single("file"), (req, res, next) => {
  const image = "http://103.119.92.91:3050/web/slider/" + req.file.filename;
  const { id, title, text } = req.body;
  SliderWebTable.update({ id, title, text, image })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.put("/deletenews", (req, res, next) => {
  const { id } = req.body;
  SliderWebTable.delete({ id })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

module.exports = router;
