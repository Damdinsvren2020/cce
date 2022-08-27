const pool = require('../../databasePool');
class CategoryTable {
    static getCategory() {
        return new Promise((resolve, reject) => {
            pool.query(
                `select * from category`,
                [],
                (error, response ) => {
                    if(error) return reject(error);
                    if(response.rows.length === 0) return reject(new Error('no category'));
                    resolve(response.rows);
                }
            );
        });
    }
}
module.exports = CategoryTable;