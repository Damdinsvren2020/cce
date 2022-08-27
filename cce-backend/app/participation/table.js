const pool = require("../../databasePool");

class participationWeb {
  static getPar() {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM publicationparti`, [], (error, response) => {
        if (error) return reject(error);

        if (response.rows.length === 0) return reject(new Error("no book"));

        resolve(response.rows);
      });
    });
  }

  static getParId({ parId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM publicationparti WHERE id = $1`,
        [parId],
        (error, response) => {
          if (error) return reject(error);

          if (response.rows.length === 0) return reject(new Error("no book"));

          resolve(response.rows[0]);
        }
      );
    });
  }

  static postPub({ title, text, image }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO publicationparti(title,text,image) VALUES($1, $2, $3)`,
        [title, text, image],
        (error, response) => {
          if (error) return reject(error);
          resolve();
        }
      );
    });
  }

  static updatePubCe({ id, title, text, image }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `UPDATE publicationparti SET title=$2, text=$3, image=$4 WHERE id=$1`,
        [id, title, text, image],
        (error, response) => {
          if (error) return reject(error);

          resolve();
        }
      );
    });
  }

  static deletePubCe({ id }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `DELETE FROM publicationparti WHERE id=$1`,
        [id],
        (error, response) => {
          if (error) return reject(error);

          resolve();
        }
      );
    });
  }
}

module.exports = participationWeb;
