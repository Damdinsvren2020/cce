const { Router } = require("express");
const StoriesTable = require("../../storiesweb/table");
const router = new Router();

const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../assets/web/stories"));
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

router.get("/allstories", (req, res, next) => {
  StoriesTable.getStories()
    .then((stories) => {
      res.json(stories);
    })
    .catch((error) => next(error));
});

router.get("/storiesAdmin", (req, res, next) => {
  const dataTable = [];
  StoriesTable.getStories()
    .then((stories) => {
      stories.forEach((element) => {
        dataTable.push(Object.values(element));
      });
      res.json(dataTable);
    })
    .catch((error) => next(error));
});

router.post("/storiesDetail", (req, res, next) => {
  const { storiesId } = req.body;
  StoriesTable.getStoriesDetail({ storiesId })
    .then((news) => res.json(news))
    .catch((error) => next(error));
});

// router.post("/storydetail", (req, res, next) => {
//   const { storiesId } = req.body;
//   StoriesTable.getStoriesDetail({ storiesId })
//     .then((news) => res.json(news))
//     .catch((error) => next(error));
// });

router.post("/poststories", upload.single("file"), (req, res, next) => {
  const image = "http://103.119.92.91:3050/web/stories/" + req.file.filename;
  const { title, text, language } = req.body;
  StoriesTable.addStories({ title, text, image, language })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.put("/putstories", (req, res, next) => {
  const { id, title, text, image, language } = req.body;
  StoriesTable.updateStories({ id, title, text, image, language })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.put("/putstoriesFile", upload.single("file"), (req, res, next) => {
  const image = "http://103.119.92.91:3050/web/stories/" + req.file.filename;
  const { id, title, text, language } = req.body;
  StoriesTable.updateStories({ id, title, text, image, language })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.put("/deletestories", (req, res, next) => {
  const { id } = req.body;
  StoriesTable.deleteNews({ id })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.post("/poststoriesall", upload.any(), (req, res, next) => {
  console.log(req);
  const urlArray = [];
  req.files.forEach((file) => {
    urlArray.push({
      urlImage: "http://103.119.92.91:3050/web/stories/" + file.filename,
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

module.exports = router;
