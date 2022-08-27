const pool = require("../../databasePool");

class DonorsWeb {
  static getDonors() {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM donorsweb`,
        [],
        (error, response) => {
          if (error) return reject(error);

          if (response.rows.length === 0) return reject(new Error("no donorsweb"));

          resolve(response.rows);
        }
      );
    });
  }

  static getDonorId({ id }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM donorsweb WHERE id = $1`,
        [id],
        (error, response) => {
          if (error) return reject(error);

          if (response.rows.length === 0) return reject(new Error("no donorsweb"));

          resolve(response.rows[0]);
        }
      );
    });
  }

  static postDonors({ image }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO donorsweb(image) VALUES($1)`,
        [image],
        (error, response) => {
          if (error) return reject(error);

          resolve();
        }
      );
    });
  }

  static postdonorAll({ urlArray }) {
    return new Promise((resolve, reject) => {
      urlArray.map((url) => {
        const urlName = url.urlImage;
        pool.query(
          `INSERT INTO donorsweb(image) VALUES($1)`,
          [urlName],
          (error, response) => {
            if (error) return reject(error);

            resolve(response);
          }
        );
      });
    });
  }

  static updateDonor({ id, image }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `UPDATE donorsweb SET image = $2 WHERE id = $1`,
        [id, image],
        (error, response) => {
          if (error) return reject(error);

          resolve();
        }
      );
    });
  }

  static deleteDonor({ id }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `DELETE FROM donorsweb WHERE id = $1`,
        [id],
        (error, response) => {
          if (error) return reject(error);

          resolve();
        }
      );
    });
  }
}

module.exports = DonorsWeb;
