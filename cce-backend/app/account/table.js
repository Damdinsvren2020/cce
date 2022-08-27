const pool = require("../../databasePool");

class AccountTable {
  static storeAccount({ email, passwordHash }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO account(email, "passwordHash")
        VALUES($1, $2) RETURNING email, "passwordHash"`,
        [email, passwordHash],
        (error, response) => {
          if (error) return reject(error);

          resolve({ account: response.rows[0] });
        }
      );
    });
  }

  static getAccountByEmail(email ) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT email, "passwordHash" FROM account
         WHERE email = $1`,
        [email],
        (error, response) => {
          if (error) return reject(error);

          resolve({ account: response.rows[0] });
        }
      );
    });
  }

  static getAccount(id) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT id, "passwordHash", email FROM account
				WHERE id = $1`,
        [id],
        (error, response) => {
          if (error) return reject(error);

          resolve({ account: response.rows[0] });
        }
      );
    });
  }
}

module.exports = AccountTable;
