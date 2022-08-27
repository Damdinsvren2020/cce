const { Router } = require("express");
const NewsTable = require("../news/table");
const router = new Router();
router.get("/all", (req, res, next) => {
  NewsTable.getNews()
    .then((news) => res.json(news))
    .catch((error) => next(error));
});
router.get("/allAdmin", (req, res, next) => {
  const dataTable = [];
  NewsTable.getNews()
    .then((category) => {
      category.forEach((element) => {
        dataTable.push(Object.values(element));
      });
      res.json(dataTable);
    })
    .catch((error) => next(error));
});
router.get("/c1", (req, res, next) => {
  NewsTable.getNewsC1()
    .then((news) => {
      let hyperTextArray = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
      ];
      let i;
      let ar = [, , , , , , , , , , , , , , , , , , , , , , , ,];
      let maxf = 0;
      for (i = 0; i < news.length; i++) {
        hyperTextArray[news[i].idid - 1].push(news[i].info_text);
        ar[news[i].idid - 1] = i;
        if (news[i].idid - 1 > maxf) maxf = news[i].idid - 1;
      }
      for (i = 0; i < maxf; i++)
        console.log("+++", i + 1, " ", hyperTextArray, "++++");
      let newsArray = [];
      for (i = maxf; i >= 0; i--) {
        newsArray.push({
          id: news[ar[i]].id,
          mealId: news[ar[i]].mealId,
          title: news[ar[i]].title,
          imageUrl: news[ar[i]].imageUrl,
          info_title: news[ar[i]].info_title,
          info_text: hyperTextArray[i],
          Pid: news[ar[i]].Pid,
        });
      }
      res.json(newsArray);
    })
    .catch((error) => next(error));
});
router.get("/p1", (req, res, next) => {
  NewsTable.getNewsP1()
    .then((news) => res.json(news))
    .catch((error) => next(error));
});
router.get("/p2", (req, res, next) => {
  NewsTable.getNewsP2()
    .then((news) => res.json(news))
    .catch((error) => next(error));
});

module.exports = router;
