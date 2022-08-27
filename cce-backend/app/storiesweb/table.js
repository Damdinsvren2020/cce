const pool = require("../../databasePool");

class StoriesTable {
  static getStories() {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM storiesweb`, [], (error, response) => {
        if (error) return reject(error);

        if (response.rows.length === 0) return reject(new Error("no stories"));

        resolve(response.rows);
      });
    });
  }

  static getStoriesDetail({ storiesId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM storiesweb WHERE id = $1`,
        [storiesId],
        (error, response) => {
          if (error) return reject(error);

          if (response.rows.length === 0)
            return reject(new Error("no stories"));

          resolve(response.rows[0]);
        }
      );
    });
  }

  static addStories({ title, text, image, language }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO storiesweb(title, text, image, language) VALUES($1, $2, $3, $4)`,
        [title, text, image, language],
        (error, response) => {
          if (error) return reject(error);

          resolve();
        }
      );
    });
  }

  static updateStories({ id, title, text, language, image }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `UPDATE storiesweb SET title = $2, text = $3, language = $4, image =$5 WHERE id = $1`,
        [id, title, text, language, image],
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
        `DELETE FROM storiesweb WHERE id = $1`,
        [id],
        (error, response) => {
          if (error) return reject(error);

          resolve();
        }
      );
    });
  }
}

module.exports = StoriesTable;
