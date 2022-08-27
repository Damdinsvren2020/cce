const pool = require('../../databasePool');

class NewsTable {
  
  static getNews() {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM news order by id desc`,
        [],
        (error, response) => {
          if (error) return reject(error);

          if (response.rows.length === 0) return reject(new Error('no news'));

          resolve(response.rows);
        }
      );
    });
  }
  static getNewsC1() {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM news where "mealId"='c1' order by id desc`,
        [],
        (error, response) => {
          if (error) return reject(error);

          if (response.rows.length === 0) return reject(new Error('no news'));

          resolve(response.rows);
        }
      );
    });
  }
  static getNewsP1() {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM news where "mealId"='p1' order by id desc`,
        [],
        (error, response) => {
          if (error) return reject(error);

          if (response.rows.length === 0) return reject(new Error('no news'));

          resolve(response.rows);
        }
      );
    });
  }
  static getNewsP2() {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM news where "mealId"='p2' order by id desc`,
        [],
        (error, response) => {
          if (error) return reject(error);

          if (response.rows.length === 0) return reject(new Error('no news'));

          resolve(response.rows);
        }
      );
    });
  }
}

module.exports=NewsTable;