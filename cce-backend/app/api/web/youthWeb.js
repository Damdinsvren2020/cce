const { Router } = require("express");
const router = new Router();
const publicationyouthweb = require("../../Youthdevelopment/table");

const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../assets/web/publication/"));
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

router.get("/youthdevelopment", (req, res, next) => {
  publicationyouthweb
    .getYouth()
    .then((Youth) => {
      res.json(Youth);
    })
    .catch((error) => next(error));
});

router.post("/pubdetail", (req, res, next) => {
  const { youthId } = req.body;
  publicationyouthweb
    .getYouthId({ youthId })
    .then((news) => res.json(news))
    .catch((error) => next(error));
});

router.post("/insert", upload.single("file"), (req, res, next) => {
  const image =
    "http://103.119.92.91:3050/web/publication/" + req.file.filename;
  console.log("[IMAGE]", image);
  const { title, text } = req.body;
  publicationyouthweb
    .insert({ title, text, image })
    .then((pubtest) => res.json(pubtest))
    .catch((error) => next(error));
});

router.put("/update", (req, res, next) => {
  const { id, title, text, image } = req.body;
  publicationyouthweb
    .update({ id, title, text, image })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.put("/updateFile", upload.single("file"), (req, res, next) => {
  const image =
    "http://103.119.92.91:3050/web/publication/" + req.file.filename;
  const { id, title, text } = req.body;
  publicationyouthweb
    .update({ id, title, text, image })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.put("/delete", (req, res, next) => {
  const { id } = req.body;
  publicationyouthweb
    .delete({ id })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.post("/test", (req, res, next) => {
  const { title, text } = req.body;
  publicationyouthweb
    .postbook({ title, text })
    .then((response) => res.json(response))
    .catch((error) => next(error));
  console.log("A1", title);
  console.log("A2", text);
});

module.exports = router;
