const { Router } = require("express");
const router = new Router();
const Ecologipublicationweb = require("../../ecologiEducation/table");

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

router.get("/publicationecologi", (req, res, next) => {
  Ecologipublicationweb.getEcologi()
    .then((ecologi) => {
      res.json(ecologi);
    })
    .catch((error) => next(error));
});
router.post("/pubdetail", (req, res, next) => {
  const { ecologiId } = req.body;
  Ecologipublicationweb.getEcologiId({ ecologiId })
    .then((news) => res.json(news))
    .catch((error) => next(error));
});

router.post("/insert", upload.single("file"), (req, res, next) => {
  const image =
    "http://103.119.92.91:3050/web/publication/" + req.file.filename;
  console.log("[IMAGE]", image);
  const { title, text } = req.body;
  Ecologipublicationweb.insert({ title, text, image })
    .then((pubtest) => res.json(pubtest))
    .catch((error) => next(error));
});

router.put("/update", (req, res, next) => {
  const { id, title, text, image } = req.body;
  Ecologipublicationweb.update({ id, title, text, image })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.put("/updateFile", upload.single("file"), (req, res, next) => {
  const image =
    "http://103.119.92.91:3050/web/publication/" + req.file.filename;
  const { id, title, text } = req.body;
  Ecologipublicationweb.update({ id, title, text, image })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.put("/delete", (req, res, next) => {
  const { id } = req.body;
  Ecologipublicationweb.delete({ id })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

module.exports = router;
