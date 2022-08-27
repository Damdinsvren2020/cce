const pool = require("../../databasePool");

class NewsWebTable {
  static getNews() {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM newsweb ORDER BY date DESC`,
        [],
        (error, response) => {
          if (error) return reject(error);

          if (response.rows.length === 0) return reject(new Error("no news"));

          resolve(response.rows);
        }
      );
    });
  }

  static getNewsLanguage({ language }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM newsweb WHERE language = $1 ORDER BY date DESC`,
        [language],
        (error, response) => {
          if (error) return reject(error);

          if (response.rows.length === 0)
            return reject(new Error("no newslanguage"));

          resolve(response.rows);
        }
      );
    });
  }

  static getNewsId({ newsId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM newsweb WHERE id = $1`,
        [newsId],
        (error, response) => {
          if (error) return reject(error);

          if (response.rows.length === 0) return reject(new Error("no news"));

          resolve(response.rows[0]);
        }
      );
    });
  }

  static postNews({ title, text, image, language, date }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO newsweb(title,text,image,language, "newsDate") VALUES($1, $2, $3, $4, $5)`,
        [title, text, image, language, date],
        (error, response) => {
          if (error) return reject(error);

          resolve();
        }
      );
    });
  }

  static updateNews({ id, title, text, language }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `UPDATE newsweb SET title = $2, text = $3, language = $4 WHERE id = $1`,
        [id, title, text, language],
        (error, response) => {
          if (error) return reject(error);

          resolve();
        }
      );
    });
  }

  static deleteNews({ id }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `DELETE FROM newsweb WHERE id = $1`,
        [id],
        (error, response) => {
          if (error) return reject(error);

          resolve();
        }
      );
    });
  }
}

module.exports = NewsWebTable;
