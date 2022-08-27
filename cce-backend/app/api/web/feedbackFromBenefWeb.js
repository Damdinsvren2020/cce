const { Router, response } = require("express");
const FeedbackTable = require("../../feedbackWeb/table");
const router = new Router();
const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../assets/web/feedback"));
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
  FeedbackTable.getFeedback()
    .then((news) => {
      res.json(news);
    })
    .catch((error) => next(error));
});

router.get("/allAdmin", (req, res, next) => {
  const dataTable = [];
  FeedbackTable.getFeedback()
    .then((newsweb) => {
      newsweb.forEach((element) => {
        dataTable.push(Object.values(element));
      });
      res.json(dataTable);
    })
    .catch((error) => next(error));
});

router.post("/detail", (req, res, next) => {
  const { id } = req.body;
  FeedbackTable.getFeedbackId({ id })
    .then((feedback) => res.json(feedback))
    .catch((error) => next(error));
});

router.post("/post", upload.single("file"), (req, res, next) => {
  const image = "http://103.119.92.91:3050/web/feedback/" + req.file.filename;
  FeedbackTable.insert({ image })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.post("/postall", upload.any(), (req, res, next) => {
  const urlArray = [];
  req.files.forEach((file) => {
    urlArray.push({
      urlImage: "http://103.119.92.91:3050/web/feedback/" + file.filename,
    });
  });
  FeedbackTable.insertAll({ urlArray })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.put("/put", (req, res, next) => {
  const { id } = req.body;
  FeedbackTable.update({ id })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.put("/delete", (req, res, next) => {
  const { id } = req.body;
  FeedbackTable.delete({ id })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

module.exports = router;
