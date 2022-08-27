const { Router, response } = require("express");
const OurTeamTable = require("../../ourteamweb/table");
const router = new Router();
const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../assets/web/ourteam"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname +
        "-" +
        file.originalname +
        "." +
        file.originalname.substring(1 + file.originalname.lastIndexOf("."))
    );
  },
});

var upload = multer({ storage: storage });

router.get("/all", (req, res, next) => {
  OurTeamTable.getAll()
    .then((news) => {
      res.json(news);
    })
    .catch((error) => next(error));
});

router.post("/allLanguage", (req, res, next) => {
  const { language } = req.body;
  OurTeamTable.getAllLanguage({ language })
    .then((news) => {
      res.json(news);
    })
    .catch((error) => next(error));
});

router.get("/allAdmin", (req, res, next) => {
  const dataTable = [];
  OurTeamTable.getNews()
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
  OurTeamTable.getDetail({ id })
    .then((news) => res.json(news))
    .catch((error) => next(error));
});

router.post("/insert", upload.single("file"), (req, res, next) => {
  const image = "http://103.119.92.91:3050/web/ourteam/" + req.file.filename;
  const { name, job, text, language } = req.body;
  OurTeamTable.insert({ name, job, image, text, language })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.put("/update", (req, res, next) => {
  const { id, name, job, text, language, image } = req.body;
  OurTeamTable.update({ id, name, job, text, language, image })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.put("/updateFile", upload.single("file"), (req, res, next) => {
  const image = "http://103.119.92.91:3050/web/ourteam/" + req.file.filename;
  const { id, name, job, text, language } = req.body;
  OurTeamTable.update({ id, name, job, text, language, image })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.put("/delete", (req, res, next) => {
  const { id } = req.body;
  OurTeamTable.delete({ id })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

module.exports = router;
