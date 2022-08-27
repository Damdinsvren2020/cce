const { Router } = require("express");

const AccountTable = require("../account/table");
//const AccountDragonTable = require('../accountDragon/table');
//const Session = require('../account/session');
const { hash } = require("../account/helper");
const { setToken, deleteToken, authenticatedAccount } = require("./helper");
//const { getDragonWithTraits } = require('../dragon/helper');

const router = new Router();

router.post("/signup", (req, res, next) => {
  const { email, password } = req.body;
  //const emailHash = hash(email);
  const passwordHash = hash(password);

  AccountTable.getAccountByEmail({ email })
    .then(({ account }) => {
      if (!account) {
        return AccountTable.storeAccount({ email, passwordHash });
      } else {
        const error = new Error("This email has already been taken");

        error.statusCode = 409;
        throw error;
      }
    })
    .then(({ account }) => {
      let { email, passwordHash } = account;
      return setToken({ email, passwordHash, res });
    })
    .then(({ message }) => res.json({ message }))
    .catch((error) => next(error));
});

router.post("/login", (req, res, next) => {
  const { email, password } = req.body;

  AccountTable.getAccountByEmail(email)
    .then(({ account }) => {
      if (account && account.passwordHash === hash(password)) {
        console.log("B5", account);
        const { email, passwordHash } = account;

        return setToken({ email, passwordHash, res });
      } else {
        const error = new Error("Incorect email/password");

        error.statusCode = 409;

        throw error;
      }
    })
    .then(({ message }) => res.json({ message }))
    .catch((error) => next(error));
});

router.get("/logout", (req, res, next) => {
  deleteToken({ res });
});

//nodejs query string parameters

router.get("/authenticated", (req, res, next) => {
  let patt = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/;
  console.log("B1", patt.test(req.headers.token));

  if (patt.test(req.headers.token)) {
    console.log("B2");
    authenticatedAccount(req.headers.token)
      .then(({ authenticated }) => res.json({ authenticated }))
      .catch((error) => next(error));
  } else {
    res.json({ authenticated: false });
  }
  // authenticatedAccount(req.headers.token)
  //   .then(({ authenticated }) => res.json({ authenticated }))
  //   .catch((error) => next(error));
});

router.post("/profile", (req, res, next) => {});

// router.get('/info', (req, res, next) => {
// 	authenticatedAccount({ sessionString: req.cookies.sessionString })
// 		.then(({ account, email }) => {
// 			res.json({ info: { email } });
// 		})
// 		.catch(error => next(error));
// });

module.exports = router;
