const pool = require("../../databasePool");

class SliderWebTable {
  static getAll() {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM sliderweb ORDER BY id DESC`, [], (error, response) => {
        if (error) return reject(error);

        if (response.rows.length === 0) return reject(new Error("no slider"));

        resolve(response.rows);
      });
    });
  }

  static getDetail({ id }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM sliderweb WHERE id = $1`,
        [id],
        (error, response) => {
          if (error) return reject(error);

          if (response.rows.length === 0) return reject(new Error("no slider"));

          resolve(response.rows[0]);
        }
      );
    });
  }

  static insert({ title, text, image }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO sliderweb(title,text,image) VALUES($1, $2, $3)`,
        [title, text, image],
        (error, response) => {
          if (error) return reject(error);

          resolve();
        }
      );
    });
  }

  static update({ id, title, text, image }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `UPDATE sliderweb SET title = $2, text = $3, image=$4 WHERE id = $1`,
        [id, title, text, image],
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
        `DELETE FROM sliderweb WHERE id = $1`,
        [id],
        (error, response) => {
          if (error) return reject(error);

          resolve();
        }
      );
    });
  }
}

module.exports = SliderWebTable;
