const sql = require('msnodesqlv8');

const connectionString = 'Driver={SQL Server Native Client 11.0}; Server=localhost; Database={core-app}; Trusted_Connection=Yes;'

const isTest = ['test'].includes(process.env.NODE_ENV);

const callNoResQueryMock = query => {
    return new Promise((resolve) => {
        resolve();
    });
}

const callNoResQuery = query => {
    return new Promise((resolve, reject) => {
        sql.open(connectionString, function (err, con) {
            if (err) {
                reject(`Failed to open with error: ${err.message}`);
            }
            if (con) {
                con.query(query, function (err, succ) {
                    if (err) {
                        reject(`Failed to execute with error: ${err}`);
                    }
                    if (succ) {
                        resolve();
                    }
                });
            }
        })
    });
}

const getOpsaetningMock = async query => {
    console.log('getOpsaetningMock call: ', query);
    return 1;
}

const getOpsaetning = async (aftalenr) => {
    console.log('aft:', aftalenr);
    var res = await callQuery(`SELECT TOP 1 opsaetning FROM Opsaetning WHERE Aftalenr = ${aftalenr}`);
    console.log('res:', res);
    if (!Array.isArray(res) || res.length != 1) {
        throw 'No valid data obtained from db';
    } else {
        const opsaetning = res[0].opsaetning;
        if (Number.isInteger(opsaetning)) {
            return opsaetning;
        } else {
            throw "Invalid db data";
        }
    }
}

const callQuery = query => {
    return new Promise((resolve, reject) => {
        sql.open(connectionString, function (err, con) {
            if (err) {
                reject(`Failed to open with error: ${err.message}`);
            }
            if (con) {
                con.query(query, function (err, succ) {
                    if (err) {
                        reject(`Failed to execute with error: ${err}`);
                    }
                    if (succ) {
                        console.log('succ', succ);
                        resolve(succ);
                    }
                });
            }
        });
    })
};

module.exports = {
    callNoResQuery: isTest ? callNoResQueryMock : callNoResQuery,
    getOpsaetning: isTest ? getOpsaetningMock : getOpsaetning,
}