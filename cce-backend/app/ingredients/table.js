const pool = require('../../databasePool');

class IngredientsTable {
  
  static getIngredients() {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM ingredients
        `,
        [],
        (error, response) => {
          if (error) return reject(error);

          if (response.rows.length === 0) return reject(new Error('no ingredients'));

          resolve(response);
        }
      );
    });
  }
  
// static getOrdersId({newsId}) {
//    return new Promise((resolve, reject) => {
//       pool.query(
//         `SELECT *
//         FROM breaking_news
//         WHERE news_id = $1`,
//         [newsId],
//         (error, response) => {
//           if (error) return reject(error);

//           if (response.rows.length === 0) return reject(new Error('no news'));

//           resolve(response.rows[0]);
//         }
//       );
//     });
//   }
//   static deleteNewsId({newsId}) {
//     return new Promise((resolve, reject) => {
//        pool.query(
//          `DELETE 
//          FROM breaking_news
//          WHERE news_id = $1`,
//          [newsId],
//          (error, response) => {
//            if (error) return reject(error);
 
           
//            resolve();
//          }
//        );
//      });
//    }
//    static updateNewsId({newsId, breakingNews}) {
//     return new Promise((resolve, reject) => {
//        pool.query(
//          `UPDATE breaking_news
//          SET breaking_news = $1 
//          WHERE news_id = $2`,
//          [breakingNews, newsId],
//          (error, response) => {
//            if (error) return reject(error);
 
           
//            resolve();
//          }
//        );
//      });
//    }
}

module.exports = IngredientsTable;
