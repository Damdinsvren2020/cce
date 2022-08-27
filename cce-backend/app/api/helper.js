const AccountTable = require("../account/table");
const { APP_SECRET } = require("../../secrets");
const jwt = require("jsonwebtoken");

const setToken = ({ email, passwordHash, res }) => {
  return new Promise((resolve, reject) => {
    const token = jwt.sign({ email, passwordHash }, APP_SECRET, {
      expiresIn: 3600,
    });
    res.json({
      email: email,
      expiresIn: 3600,
      token: token,
    });
  });
};

const deleteToken = ({ res }) => res.json({ token: null });

const authenticatedAccount = (token) => {
  return new Promise((resolve, reject) => {
    // let str =

    // let patt = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/;
    // let result = patt.test(str);
    if (!token) {
      //  &&expired auth
      const error = new Error("Invalid token");

      error.statusCode = 400;

      return reject(error);
    } else {
      //const {id, email, passwordHash} = jwt.decode(token, APP_SECRET);
      const { email, passwordHash } = jwt.decode(token, APP_SECRET);
      console.log("B3", email, passwordHash);
      let authenticated = false;
      AccountTable.getAccountByEmail(email)
        .then(({ account }) => {
          console.log("B4", account);
          if (account && account.passwordHash == passwordHash) {
            authenticated = true;
          }
          resolve({ account, authenticated });
        })
        .catch((error) => reject(error));
    }
  });
};

module.exports = { setToken, deleteToken, authenticatedAccount };
