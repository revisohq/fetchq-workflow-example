const sql = require('msnodesqlv8');

const connectionString = 'Driver={SQL Server Native Client 11.0}; Server=localhost; Database={core-app}; Trusted_Connection=Yes;'

const isTest = ['test'].includes(process.env.NODE_ENV);

const callNonQuery = query => {
    sql.open(connectionString, function (err, con) {
        if (err) {
            return `Failed to open with error: ${err.message}`;
        }
        if (con) {
            con.query(query, function (err/*, succ*/) {
                if (err) {
                    return `Failed to execute with error: ${err}`;
                }
            });
        }
    });
}

const callNonQueryMock = query => {
    console.log('DB call: ', query);
}

module.exports = {
    callNonQuery: isTest ? callNonQueryMock : callNonQuery,

}