const { Router } = require("express");
const participationwebTable = require("../../participation/table");
const router = new Router();

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

router.get("/publicationpartiall", (req, res, next) => {
  participationwebTable
    .getPar()
    .then((par) => {
      res.json(par);
    })
    .catch((error) => next(error));
});
router.post("/pubdetail", (req, res, next) => {
  const { parId } = req.body;
  participationwebTable
    .getParId({ parId })
    .then((news) => res.json(news))
    .catch((error) => next(error));
});

router.post("/postpubpart", upload.single("file"), (req, res, next) => {
  const image =
    "http://103.119.92.91:3050/web/publication/" + req.file.filename;
  console.log("[IMAGE]", image);
  const { title, text } = req.body;
  participationwebTable
    .postPub({ title, text, image })
    .then((pubtest) => res.json(pubtest))
    .catch((error) => next(error));
});

router.put("/putpubpart", (req, res, next) => {
  const { id, title, text, image } = req.body;
  participationwebTable
    .updatePubCe({ id, title, text, image })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.put("/putpubpartFile", upload.single("file"), (req, res, next) => {
  const image =
    "http://103.119.92.91:3050/web/publication/" + req.file.filename;
  const { id, title, text } = req.body;
  participationwebTable
    .updatePubCe({ id, title, text, image })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.put("/deletepubpart", (req, res, next) => {
  const { id } = req.body;
  participationwebTable
    .deletePubCe({ id })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

module.exports = router;
