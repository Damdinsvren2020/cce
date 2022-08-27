const { Router } = require("express");
const QuizTable = require("../quiz/table");
const router = Router();
router.get("/all", (req, res, next) => {
  QuizTable.getQuiz()
    .then((quiz) => res.json(quiz))
    .catch((error) => next(error));
});
router.get("/allAdmin", (req, res, next) => {
  const dataTable = [];
  QuizTable.getQuiz()
    .then((quiz) => {
      quiz.forEach((element) => {
        dataTable.push(Object.values(element));
      });
      res.json(dataTable);
    })
    .catch((error) => next(error));
});
router.get("/third", (req, res, next) => {
  QuizTable.getQuizThird()
    .then((quiz) => {
      //console.log(quiz,"\n:QUIZ");
      let quizzes = [];
      let i;
      for (i = 0; i < 14; i++) {
        quizzes.push({
          Pid: i + 1,
          categoryId: "",
          id: "",
          question: [""],
          answer: "",
          point: [""],
        });
      }
      for (i = 0; i < quiz.length; i++) {
        if (quizzes[quiz[i].id - 1].id > 0) {
          //console.log("update");
          quizzes[quiz[i].id - 1].question.push(quiz[i].question);
          quizzes[quiz[i].id - 1].point.push(quiz[i].point);
        } else {
          quizzes[quiz[i].id - 1].Pid = quiz[i].Pid;
          quizzes[quiz[i].id - 1].categoryId = quiz[i].categoryId;
          quizzes[quiz[i].id - 1].id = quiz[i].id;
          quizzes[quiz[i].id - 1].question[0] = quiz[i].question;
          quizzes[quiz[i].id - 1].answer = quiz[i].answer;
          quizzes[quiz[i].id - 1].point[0] = quiz[i].point;

          //console.log("create\n",quizzes[quiz[i].id-1]);
        }
        //console.log(quiz[i].id,":id");
      }
      let quizzes2 = [];
      for (i = 0; i < quizzes.length; i++) {
        const { Pid, categoryId, id, /*title, */ question, answer, point } = {
          ...quizzes[i],
        };
        //console.log({Pid, categoryId, id, question, answer});
        let a, b, c, d, e;
        if (question.length >= 1) a = point[0];
        if (question.length >= 2) b = point[1];
        if (question.length >= 3) c = point[2];
        if (question.length >= 4) d = point[3];
        if (question.length >= 5) e = point[4];
        quizzes2.push({ Pid, categoryId, id, question, answer, a, b, c, d, e });
      }
      //console.log(quizzes.length,":quizzes");
      res.json(quizzes2);
    })
    .catch((error) => next(error));
});
module.exports = router;
