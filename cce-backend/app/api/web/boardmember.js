const { Router, response } = require("express");
const BoardMemberTable = require("../../boardmemberweb/table");
const router = new Router();
const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../assets/web/boardmember"));
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
  BoardMemberTable.getAll()
    .then((news) => {
      res.json(news);
    })
    .catch((error) => next(error));
});

router.post("/allLanguage", (req, res, next) => {
  const { language } = req.body;
  BoardMemberTable.getAllLanguage({ language })
    .then((news) => {
      res.json(news);
    })
    .catch((error) => next(error));
});

router.get("/allAdmin", (req, res, next) => {
  const dataTable = [];
  BoardMemberTable.getNews()
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
  BoardMemberTable.getDetail({ id })
    .then((news) => res.json(news))
    .catch((error) => next(error));
});

router.post("/insert", upload.single("file"), (req, res, next) => {
  const image =
    "http://103.119.92.91:3050/web/boardmember/" + req.file.filename;
  const { name, job, text, language } = req.body;
  BoardMemberTable.insert({ name, job, image, text, language })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.put("/update", (req, res, next) => {
  const { id, name, job, text, language, image } = req.body;
  BoardMemberTable.update({ id, name, job, text, language, image })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.put("/updateFile", upload.single("file"), (req, res, next) => {
  const image = "http://103.119.92.91:3050/web/boardmember/" + req.file.filename;
  const { id, name, job, text, language } = req.body;
  BoardMemberTable.update({ id, name, job, text, language, image })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.put("/delete", (req, res, next) => {
  const { id } = req.body;
  BoardMemberTable.delete({ id })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

module.exports = router;
