const pool = require('../../databasePool');
class CalendarTable {
    static getCalendar() {
        return new Promise((resolve, reject) => {
            pool.query(
                `select * from calendar`,
                [],
                (error, response ) => {
                    if(error) return reject(error);
                    if(response.rows.length === 0) return reject(new Error('no calendar'));
                    resolve(response.rows);
                }
            );
        });
    }
}
module.exports = CalendarTable;