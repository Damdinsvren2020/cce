const { Router } = require("express");
const partnerswebTable = require("../../partnersweb/table");
const router = new Router();
const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../assets/web/partners"));
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

router.get("/partners", (req, res, next) => {
  partnerswebTable
    .getPartners()
    .then((partner) => {
      res.json(partner);
    })
    .catch((error) => next(error));
});

router.post("/insert", upload.single("file"), (req, res, next) => {
  const image = "http://103.119.92.91:3050/web/partners/" + req.file.filename;
  const { title, text, language } = req.body;
  partnerswebTable
    .insert({ title, text, image, language })
    .then((partnertest) => res.json(partnertest))
    .catch((error) => next(error));
});

router.put("/update", (req, res, next) => {
  const { id, title, text, image, language } = req.body;
  partnerswebTable
    .update({ id, title, text, image, language })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.put("/updateFile", upload.single("file"), (req, res, next) => {
  const image = "http://103.119.92.91:3050/web/partners/" + req.file.filename;
  const { id, title, text, language } = req.body;
  partnerswebTable
    .update({ id, title, text, image, language })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.put("/delete", (req, res, next) => {
  const { id } = req.body;
  partnerswebTable
    .delete({ id })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

module.exports = router;
