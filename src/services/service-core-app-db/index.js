const sql = require('msnodesqlv8');
const { SERVICE_NAME, ...hooks } = require('./hooks');
const connectionString = 'Driver={SQL Server Native Client 11.0}; Server=localhost; Database={core-app}; Trusted_Connection=Yes;'


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
    registerAction({
        hook: '$INIT_SERVICE',
        name: SERVICE_NAME,
        trace: __filename,
        handler: () => setContext('coreappdb', { callNoResQuery, callQuery }),
    });
};