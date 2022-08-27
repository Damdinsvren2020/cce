const pool = require("../../databasePool");

class partnerswebTable {
  static getPartners() {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM partnersweb`, [], (error, response) => {
        if (error) return reject(error);

        if (response.rows.length === 0)
          return reject(new Error("мэдээлэл байхгүй байна"));

        resolve(response.rows);
      });
    });
  }

  static getPartnersId({ partnersId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM partnersweb WHERE id = $1`,
        [partnersId],
        (error, response) => {
          if (error) return reject(error);

          if (response.rows.length === 0)
            return reject(new Error("мэдээлэл байхгүй байна"));

          resolve(response.rows[0]);
        }
      );
    });
  }

  static insert({ title, text, image, language }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO partnersweb(title,text,image, language) VALUES($1, $2, $3,$4)`,
        [title, text, image, language],
        (error, response) => {
          if (error) return reject(error);
          resolve();
        }
      );
    });
  }

  static update({ id, title, text, language, image }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `UPDATE partnersweb SET title=$2, text=$3, language=$4, image=$5 WHERE id=$1`,
        [id, title, text, language, image],
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
        `DELETE FROM partnersweb WHERE id=$1`,
        [id],
        (error, response) => {
          if (error) return reject(error);

          resolve();
        }
      );
    });
  }
}

module.exports = partnerswebTable;
