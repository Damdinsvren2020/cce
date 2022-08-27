const pool = require("../../databasePool");

class ProgramsWebTable {
  static getAllLanguage({ language, type }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM programsweb WHERE language = $1 AND type=$2`,
        [language, type],
        (error, response) => {
          if (error) return reject(error);

          if (response.rows.length === 0)
            return reject(new Error("no programs"));

          resolve(response.rows);
        }
      );
    });
  }

  static insert({ title, texts, type, language }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO programsweb(title,texts,type,language) VALUES($1, $2, $3, $4)`,
        [title, texts, type, language],
        (error, response) => {
          if (error) return reject(error);

          resolve();
        }
      );
    });
  }

  static update({ id, title, texts, language, type }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `UPDATE programsweb SET title = $2, texts = $3, language = $4, type=$5 WHERE id = $1`,
        [id, title, texts, language, type],
        (error, response) => {
          if (error) return reject(error);

          resolve();
        }
      );
    });
  }

  static delete({ id }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `DELETE FROM programsweb WHERE id = $1`,
        [id],
        (error, response) => {
          if (error) return reject(error);

          resolve();
        }
      );
    });
  }
}

module.exports = ProgramsWebTable;
