const pool = require("../../databasePool");
const { url } = require("inspector");

class FeedbackTable {
  static getFeedback() {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM feedbackweb`, [], (error, response) => {
        if (error) return reject(error);

        if (response.rows.length === 0) return reject(new Error("no feedback"));

        resolve(response.rows);
      });
    });
  }

  static getFeedbackId({ id }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM feedbackweb WHERE id = $1`,
        [id],
        (error, response) => {
          if (error) return reject(error);

          if (response.rows.length === 0)
            return reject(new Error("no feedback"));

          resolve(response.rows[0]);
        }
      );
    });
  }

  static insert({ image }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO feedbackweb(image) VALUES($1)`,
        [image],
        (error, response) => {
          if (error) return reject(error);

          resolve();
        }
      );
    });
  }

  static insertAll({ urlArray }) {
    return new Promise((resolve, reject) => {
      urlArray.map((url) => {
        const urlName = url.urlImage;
        pool.query(
          `INSERT INTO feedbackweb(image) VALUES($1)`,
          [urlName],
          (error, response) => {
            if (error) return reject(error);

            resolve(response);
          }
        );
      });
    });
  }

  static update({ id, image }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `UPDATE feedbackweb SET image = $2 WHERE id = $1`,
        [id, image],
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
        `DELETE FROM feedbackweb WHERE id = $1`,
        [id],
        (error, response) => {
          if (error) return reject(error);

          resolve();
        }
      );
    });
  }
}

module.exports = FeedbackTable;
