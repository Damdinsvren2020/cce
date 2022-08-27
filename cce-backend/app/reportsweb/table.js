const pool = require("../../databasePool");

class ReportsWebTable {
  static getAll() {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM reportsweb ORDER BY id DESC`,
        [],
        (error, response) => {
          if (error) return reject(error);

          if (response.rows.length === 0)
            return reject(new Error("no reportsweb"));

          resolve(response.rows);
        }
      );
    });
  }

  static getAllAdmin() {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM reportsweb`, [language], (error, response) => {
        if (error) return reject(error);

        if (response.rows.length === 0) return reject(new Error("no reportsweb"));

        resolve(response.rows);
      });
    });
  }

  static getDetail({ id }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM reportsweb WHERE id = $1`,
        [id],
        (error, response) => {
          if (error) return reject(error);

          if (response.rows.length === 0)
            return reject(new Error("no reportsweb"));

          resolve(response.rows[0]);
        }
      );
    });
  }

  static insert({ image, file }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO reportsweb(image,file) VALUES($1, $2)`,
        [image, file],
        (error, response) => {
          if (error) return reject(error);

          resolve();
        }
      );
    });
  }

  static update({ id, image, file }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `UPDATE reportsweb SET image = $2, file = $3 WHERE id = $1`,
        [id, image, file],
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
        `DELETE FROM reportsweb WHERE id = $1`,
        [id],
        (error, response) => {
          if (error) return reject(error);

          resolve();
        }
      );
    });
  }
}

module.exports = ReportsWebTable;
