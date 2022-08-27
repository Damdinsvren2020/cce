const { Router } = require("express");
const CalendarTable = require("../calendar/table");
const router = Router();
router.get("/all", (req, res, next) => {
  CalendarTable.getCalendar()
    .then((calendar) => {
      // let uouo = [],namiin = [];
      // let  i=0;
      // for(i=0;i<7;i++)namiin.push({id: 1});
      // for(i=0;i<result.length;i++){
      //     if(100 <= result[i].score){
      //         //console.log("A1",result[i],"A1");
      //         const {categoryId, id, score, imageUrl, title, text, hyperText}={...result[i]};
      //         //console.log("A2",namiin[score-101],"A2");
      //         if(namiin[score-101].id.length){
      //             //namiin[score-101].hyperText

      //             namiin[score-101].imageUrl.push(imageUrl);
      //             namiin[score-101].title.push(title);
      //             namiin[score-101].hyperText.push(hyperText);
      //         }
      //         else {
      //             //const st=
      //             namiin[score-101]={categoryId, id, score, imageUrl: [], title: [], text, hyperText: []};
      //             //console.log("A3",namiin[score-101],"A3");
      //             namiin[score-101].imageUrl.push(imageUrl);
      //             namiin[score-101].title.push(title);
      //             namiin[score-101].hyperText.push(hyperText);
      //         }
      //     }
      //     else uouo.push(result[i]);
      // }
      // for(i=0;i<7;i++)uouo.push(namiin[i]);
      //console.log("A2",namiin,"A2");

      res.json(calendar);
    })
    .catch((error) => next(error));
});
module.exports = router;
