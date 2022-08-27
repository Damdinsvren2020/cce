const { Router } = require("express");
const CategoryTable = require("../categories/table");
const router = Router();
router.get("/all", (req, res, next) => {
  CategoryTable.getCategory()
    .then((category) => {
      res.json(category);
    })
    .catch((error) => next(error));
});

router.get("/allAdmin", (req, res, next) => {
  const dataTable = [];
  CategoryTable.getCategory()
    .then((category) => {
      category.forEach((element) => {
        dataTable.push(Object.values(element));
      });
      res.json(dataTable);
    })
    .catch((error) => next(error));
});

module.exports = router;
