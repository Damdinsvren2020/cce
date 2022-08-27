const { Router, response } = require("express");
const NewsWebTable = require("../../newsweb/table");
const TestTable = require("../../newsweb/tabletest");
const router = new Router();
const multer = require("multer");
const path = require("path");

//ckeditor 5
const multiparty = require("connect-multiparty");
const MultipartyMiddleware = multiparty({
  uploadDir: path.join(__dirname, "../assets/web/news"),
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../assets/web/news"));
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

router.get("/news", (req, res, next) => {
  NewsWebTable.getNews()
    .then((news) => {
      res.json(news);
    })
    .catch((error) => next(error));
});

router.post("/newslanguage", (req, res, next) => {
  const { language } = req.body;
  NewsWebTable.getNewsLanguage({ language })
    .then((news) => {
      res.json(news);
    })
    .catch((error) => next(error));
});

router.get("/newsAdmin", (req, res, next) => {
  const dataTable = [];
  NewsWebTable.getNews()
    .then((newsweb) => {
      newsweb.forEach((element) => {
        dataTable.push(Object.values(element));
      });
      res.json(dataTable);
    })
    .catch((error) => next(error));
});

router.post("/newsDetail", (req, res, next) => {
  const { newsId } = req.body;
  NewsWebTable.getNewsId({ newsId })
    .then((news) => res.json(news))
    .catch((error) => next(error));
});

router.post("/postnews", upload.single("file"), (req, res, next) => {
  const image = "http://103.119.92.91:3050/web/news/" + req.file.filename;
  const { title, text, language, date } = req.body;
  NewsWebTable.postNews({ title, text, image, language, date })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.post("/test", upload.single("file"), (req, res, next) => {
  const image = "http://103.119.92.91:3050/web/news/" + req.file.filename;
  const { title, text, language, date } = req.body;
  TestTable.postNews({ title, text, image, language, date })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.post("/postnewsall", upload.any(), (req, res, next) => {
  console.log(req);
  const urlArray = [];
  req.files.forEach((file) => {
    urlArray.push({
      urlImage: "http://103.119.92.91:3050/web/news/" + file.filename,
    });
  });
  res.json(urlArray);
  // const imgurl = "http://103.119.92.91:3050/web/" + req.file.filename;
  // console.log("url", imgurl);
  // const { title, text } = req.body;
  // NewsWebTable.postNews({ title, text, imgurl })
  //   .then((response) => res.json(response))
  //   .catch((error) => next(error));
});

router.post("/tesimgall", MultipartyMiddleware, (req, res, next) => {
  let TempFile = req.files.upload;
  let TempPathFile = TempFile.path;
  console.log("[TempFile]", TempFile);
  console.log("[TempPathFile]", TempPathFile);
  let filename = path.parse(TempPathFile).base;
  res.json({
    uploaded: true,
    url: "http://103.119.92.91:3050/web/news/" + filename,
  });
  console.log(filename);
});

router.put("/putnews", (req, res, next) => {
  const { id, title, text, image, language } = req.body;
  NewsWebTable.updateNews({ id, title, text, image, language })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.put("/putnewsFile", upload.single("file"), (req, res, next) => {
  const image = "http://103.119.92.91:3050/web/news/" + req.file.filename;
  const { id, title, text, language } = req.body;
  NewsWebTable.updateNews({ id, title, text, image, language })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.put("/deletenews", (req, res, next) => {
  const { id } = req.body;
  NewsWebTable.deleteNews({ id })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

module.exports = router;
