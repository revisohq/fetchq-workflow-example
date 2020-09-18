const sql = require('msnodesqlv8');
const { SERVICE_NAME, ...hooks } = require('./hooks');
const connectionString = 'Driver={SQL Server Native Client 11.0}; Server=localhost; Database={core-app}; Trusted_Connection=Yes;'


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

module.exports = ({ registerHook, registerAction, getConfig, setContext }) => {
    //registerHook(hooks);
    //console.log('hooks ', hooks)
    registerAction({
        hook: '$INIT_SERVICE',
        name: SERVICE_NAME,
        trace: __filename,
        handler: () => setContext('coreappdb', { callNoResQuery, callQuery, getOpsaetning }),
    });
};