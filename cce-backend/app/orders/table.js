const pool = require('../../databasePool');

class OrdersTable {
  
  static getOrders(id) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT info FROM orders WHERE info ->> 'userId' =` + `'` + id + `'`,
        [],
        (error, response) => {

          if (error) return reject(error);

          //if (response.rows.length === 0) return reject(new Error('no orders'));
          // `SELECT info FROM orders WHERE info ->>'email' =` + `'` + email + `'`

          resolve({ orders: response.rows });
        }
      );
    });
  }

  static putOrders(orderData) {

    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO orders(info) VALUES ($1)`,
        [ order ],
        (error, response) => {
          if (error) return reject(error); 
          resolve();
        }
      );
    });
  }
  
  static storeOrder(orderData) {
    return new Promise((resolve, reject) => {
        pool.query(
            `INSERT INTO orders(info)
            VALUES($1) RETURNING id`,
            [orderData],
            (error, response) => {
                if (error) return reject(error);
                else resolve();
            }
        );
    });
  }
  // static getOrdersId({newsId}) {
  //   return new Promise((resolve, reject) => {
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
  // }

  // static deleteNewsId({newsId}) {
  //   return new Promise((resolve, reject) => {
  //      pool.query(
  //        `DELETE 
  //        FROM breaking_news
  //        WHERE news_id = $1`,
  //        [newsId],
  //        (error, response) => {
  //          if (error) return reject(error);
 
           
  //          resolve();
  //        }
  //      );
  //    });
  // }

  // static updateNewsId({newsId, breakingNews}) {
  // return new Promise((resolve, reject) => {
  //     pool.query(
  //       `UPDATE breaking_news
  //       SET breaking_news = $1 
  //       WHERE news_id = $2`,
  //       [breakingNews, newsId],
  //       (error, response) => {
  //         if (error) return reject(error);

          
  //         resolve();
  //       }
  //     );
  //   });
  // }
}

module.exports = OrdersTable;
