const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const accountRouter = require("./api/account");
const newsRouter = require("./api/news");
const ordersRouter = require("./api/orders");
const ingredientsRouter = require("./api/ingredients");
const categoryRouter = require("./api/category");
const quizRouter = require("./api/quiz");
const resultRouter = require("./api/result");
const calendarRouter = require("./api/calendar");
const newsWeb = require("./api/web/newsweb");
const storiesweb = require("./api/web/storiesweb");
const publicationceWeb = require("./api/web/publicationceWeb");
const reportsWeb = require("./api/web/reportsWeb");
const feedbackFromBenefWeb = require("./api/web/feedbackFromBenefWeb");
const donorsEvaluationWeb = require("./api/web/donorsEvaluationWeb");
const participationWeb = require("./api/web/participationWeb");
const youthWeb = require("./api/web/youthWeb");
const EcologipublicationWeb = require("./api/web/EcologipublicationWeb");
const boardmember = require("./api/web/boardmember");
const ourteamweb = require("./api/web/ourteam");
const partnerweb = require("./api/web/partnersWeb");
const sliderweb = require("./api/web/sliderweb");
const programsWeb = require("./api/web/programsWeb");

const app = express();

console.log("PATH: ", __dirname);
app.use(express.static("app/api/assets"));

app.use(
  cors({
    origin: [
      "http://cce.mn",
      "http://www.cce.mn",
      "http://www.cce.mn:3001",
      "http://cce.mn:3001",
      "http://103.119.92.91",
      "http://103.119.92.91:3001",
      "http://103.119.92.91:3002",
      "http://localhost:3000",
      "http://localhost:3001",
    ],
    credentials: true,
  })
);

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

app.use("/partnersWeb", partnerweb);
app.use("/account", accountRouter);
app.use("/news", newsRouter);
app.use("/orders", ordersRouter);
app.use("/ingredients", ingredientsRouter);
app.use("/category", categoryRouter);
app.use("/quiz", quizRouter);
app.use("/result", resultRouter);
app.use("/calendar", calendarRouter);
app.use("/newsweb", newsWeb);
app.use("/storiesweb", storiesweb);
app.use("/publicationceWeb", publicationceWeb);
app.use("/reportsWeb", reportsWeb);
app.use("/feedBackFromBenefWeb", feedbackFromBenefWeb);
app.use("/donorsEvaluationWeb", donorsEvaluationWeb);
app.use("/participationWeb", participationWeb);
app.use("/youthWeb", youthWeb);
app.use("/EcologipublicationWeb", EcologipublicationWeb);
app.use("/boardmember", boardmember);
app.use("/ourteam", ourteamweb);
app.use("/sliderweb", sliderweb);
app.use("/programsWeb", programsWeb);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  console.error("logging error", err);

  res.status(statusCode).json({
    type: "error",
    message: err.message,
  });
});

module.exports = app;
