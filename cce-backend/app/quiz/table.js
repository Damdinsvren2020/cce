const pool = require('../../databasePool');
class QuizTable {
    static getQuiz() {
        return new Promise((resolve, reject) => {
            pool.query(
                `select * from quiz`,
                [],
                (error, response ) => {
                    if(error) return reject(error);
                    if(response.rows.length === 0) return reject(new Error('no quiz'));
                    resolve(response.rows);
                }
            );
        });
    }
    static getQuizThird() {
        return new Promise((resolve, reject) => {
            pool.query(
                `select * from quiz where "categoryId"='third'`,
                [],
                (error, response ) => {
                    if(error) return reject(error);
                    if(response.rows.length === 0) return reject(new Error('no quiz'));
                    resolve(response.rows);
                }
            );
        });
    }
}
module.exports = QuizTable;