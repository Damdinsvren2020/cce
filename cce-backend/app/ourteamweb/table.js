const pool = require("../../databasePool");

class OurTeamTable {
  static getAll() {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM ourteamweb`, [], (error, response) => {
        if (error) return reject(error);

        if (response.rows.length === 0)
          return reject(new Error("no ourteam found"));

        resolve(response.rows);
      });
    });
  }

  static getAllLanguage({ language }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM ourteamweb WHERE language = $1`,
        [language],
        (error, response) => {
          if (error) return reject(error);

          if (response.rows.length === 0)
            return reject(new Error("no ourteam found with language"));

          resolve(response.rows);
        }
      );
    });
  }

  static getDetail({ id }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM ourteamweb WHERE id = $1`,
        [id],
        (error, response) => {
          if (error) return reject(error);

          if (response.rows.length === 0)
            return reject(new Error("no ourteam found"));

          resolve(response.rows[0]);
        }
      );
    });
  }

  static insert({ name, job, image, text, language }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO ourteamweb(name,job,image,text,language) VALUES($1, $2, $3, $4, $5)`,
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
        `UPDATE ourteamweb SET name = $2, job = $3, image = $4, text=$5, language=$6 WHERE id = $1`,
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
        `DELETE FROM ourteamweb WHERE id = $1`,
        [id],
        (error, response) => {
          if (error) return reject(error);

          resolve();
        }
      );
    });
  }
}

module.exports = OurTeamTable;
