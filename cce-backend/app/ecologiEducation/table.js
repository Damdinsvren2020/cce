const pool = require("../../databasePool");

class publicationecologiwebTable {
  static getEcologi() {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM publicationecologiweb`,
        [],
        (error, response) => {
          if (error) return reject(error);

          if (response.rows.length === 0)
            return reject(new Error("ном олдсонгүй"));

          resolve(response.rows);
        }
      );
    });
  }

  static getEcologiId({ ecologiId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM publicationecologiweb WHERE id = $1`,
        [ecologiId],
        (error, response) => {
          if (error) return reject(error);

          if (response.rows.length === 0) return reject(new Error("no news"));

          resolve(response.rows[0]);
        }
      );
    });
  }

  static insert({ title, text, image }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO publicationecologiweb(title,text,image) VALUES($1, $2, $3)`,
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
        `UPDATE publicationecologiweb SET title=$2, text=$3, image=$4 WHERE id=$1`,
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
        `DELETE FROM publicationecologiweb WHERE id=$1`,
        [id],
        (error, response) => {
          if (error) return reject(error);

          resolve();
        }
      );
    });
  }
}

module.exports = publicationecologiwebTable;
