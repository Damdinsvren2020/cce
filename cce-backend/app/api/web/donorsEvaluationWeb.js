const { Router } = require("express");
const router = new Router();
const DonorsWebTable = require("../../donorsweb/table");
const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../assets/web/donors"));
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

router.get("/getDonors", (req, res, next) => {
  DonorsWebTable.getDonors()
    .then((news) => {
      res.json(news);
    })
    .catch((error) => next(error));
});

router.get("/donorsAdmin", (req, res, next) => {
  const dataTable = [];
  DonorsWebTable.getDonors()
    .then((donors) => {
      donors.forEach((element) => {
        dataTable.push(Object.values(element));
      });
      res.json(dataTable);
    })
    .catch((error) => next(error));
});

router.post("/donorDetail", (req, res, next) => {
  const { donorId } = req.body;
  DonorsWebTable.getDonorId({ donorId })
    .then((donor) => res.json(donor))
    .catch((error) => next(error));
});

router.post("/postdonor", upload.single("file"), (req, res, next) => {
  const image = "http://103.119.92.91:3050/web/donors/" + req.file.filename;
  DonorsWebTable.postDonors({ image })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.post("/postdonorall", upload.any(), (req, res, next) => {
  const urlArray = [];
  req.files.forEach((file) => {
    urlArray.push({
      urlImage: "http://103.119.92.91:3050/web/donors/" + file.filename,
    });
  });
  DonorsWebTable.postdonorAll({ urlArray })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.put("/putdonor", upload.single("file"), (req, res, next) => {
  const image = "http://103.119.92.91:3050/web/" + req.file.filename;
  DonorsWebTable.updateDonor({ id, image })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

router.put("/deletedonor", (req, res, next) => {
  const { id } = req.body;
  DonorsWebTable.deleteDonor({ id })
    .then((response) => res.json(response))
    .catch((error) => next(error));
});

module.exports = router;
