const pool = require("../../databasePool");

class BoardMemberTable {
  static getAll() {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM boardmemberweb`, [], (error, response) => {
        if (error) return reject(error);

        if (response.rows.length === 0)
          return reject(new Error("no boardmember"));

        resolve(response.rows);
      });
    });
  }

  static getAllLanguage({ language }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM boardmemberweb WHERE language = $1`,
        [language],
        (error, response) => {
          if (error) return reject(error);

          if (response.rows.length === 0)
            return reject(new Error("no boardmember with language"));

          resolve(response.rows);
        }
      );
    });
  }

  static getDetail({ id }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM boardmemberweb WHERE id = $1`,
        [id],
        (error, response) => {
          if (error) return reject(error);

          if (response.rows.length === 0)
            return reject(new Error("no boardmember"));

          resolve(response.rows[0]);
        }
      );
    });
  }

  static insert({ name, job, image, text, language }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO boardmemberweb(name,job,image,text,language) VALUES($1, $2, $3, $4, $5)`,
        [name, job, image, text, language],
        (error, response) => {
          if (error) return reject(error);

          resolve();
        }
      );
    });
  }

  static update({ id, name, job, image, text, language }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `UPDATE boardmemberweb SET name = $2, job = $3, image = $4, text=$5, language=$6 WHERE id = $1`,
        [id, name, job, image, text, language],
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
        `DELETE FROM boardmemberweb WHERE id = $1`,
        [id],
        (error, response) => {
          if (error) return reject(error);

          resolve();
        }
      );
    });
  }
}

module.exports = BoardMemberTable;
