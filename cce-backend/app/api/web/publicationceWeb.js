const { Router } = require("express");
//const publicationciviceducationTable  = require("../../publicationceWeb/table");
const publicationceWebTable = require("../../publicationceWeb/table");
const router = new Router();

const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../assets/web/publication"));
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

router.get("/publicationceall", (req, res, next) => {
  publicationceWebTable
    .getPub()
    .then((pub) => {
      res.json(pub);
    })
    .catch((error) => next(error));
});

router.get("/publicationceAdmin", (req, res, next) => {
  const dataTable = [];
  publicationceWebTable
    .getPub()
    .then((pubce) => {
      pubce.forEach((element) => {
        dataTable.push(Object.values(element));
      });
      res.json(dataTable);
    })
    .catch((error) => next(error));
});

router.post("/pubDetail", (req, res, next) => {
  const { pubId } = req.body;
  publicationceWebTable
    .getPubId({ pubId })
    .then((pubtest) => res.json(pubtest))
    .catch((error) => next(error));
});

router.post("/postpubce", upload.single("file"), (req, res, next) => {
  const image = "http://103.119.92.91:3050/web/publication/" + req.file.filename;
  const { title, text } = req.body;
  publicationceWebTable
    .postPub({ title, text, image })
    .then((pubtest) => res.json(pubtest))
    .catch((error) => next(error));
});

router.put("/putpubce", (req, res, next) => {
  const { id, title, text, image } = req.body;
  publicationceWebTable
    .updatePubCe({ id, title, text, image })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.put("/putpubceFile", upload.single("file"), (req, res, next) => {
  const image = "http://103.119.92.91:3050/web/publication/" + req.file.filename;
  const { id, title, text } = req.body;
  publicationceWebTable
    .updatePubCe({ id, title, text, image })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.put("/delete", (req, res, next) => {
  const { id } = req.body;
  publicationceWebTable
    .deletePubCe({ id })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

module.exports = router;
