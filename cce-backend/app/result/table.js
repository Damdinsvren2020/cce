const pool = require('../../databasePool');
class ResultTable {
    static getResult() {
        return new Promise((resolve, reject) => {
            pool.query(
                `select * from result`,
                [],
                (error, response ) => {
                    if(error) return reject(error);
                    if(response.rows.length === 0) return reject(new Error('no result'));
                    resolve(response.rows);
                }
            );
        });
    }
    // static getQuizThird() {
    //     return new Promise((resolve, reject) => {
    //         pool.query(
    //             `select * from quiz where "categoryId"='third'`,
    //             [],
    //             (error, response ) => {
    //                 if(error) return reject(error);
    //                 if(response.rows.length === 0) return reject(new Error('no quiz'));
    //                 resolve(response.rows);
    //             }
    //         );
    //     });
    // }
}
module.exports = ResultTable;