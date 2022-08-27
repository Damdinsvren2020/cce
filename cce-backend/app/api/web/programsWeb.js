const { Router } = require("express");
const ProgramsWebTable = require("../../programsweb/table.js");
const router = new Router();

router.post("/getAll", (req, res, next) => {
  const { language, type } = req.body;
  ProgramsWebTable.getAllLanguage({ language, type })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => next(error));
});

router.post("/insert", (req, res, next) => {
  const { title, texts, type, language } = req.body;
  ProgramsWebTable.insert({ title, texts, type, language })
    .then((data) => res.json(data))
    .catch((error) => next(error));
});

router.put("/update", (req, res, next) => {
  const { id, title, texts, language, type } = req.body;
  ProgramsWebTable.update({ id, title, texts, language, type })
    .then((data) => res.json(data))
    .catch((error) => next(error));
});

router.delete("/delete", (req, res, next) => {
  const { id } = req.body;
  ProgramsWebTable.delete({ id })
    .then((data) => res.json(data))
    .catch((error) => next(error));
});

module.exports = router;
