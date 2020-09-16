const sql = require('msnodesqlv8');
const { SERVICE } = require('@forrestjs/hooks');
const SERVICE_NAME = `${SERVICE} core-app-db-mock`;
const connectionString = 'Driver={SQL Server Native Client 11.0}; Server=localhost; Database={core-app}; Trusted_Connection=Yes;'


const getOpsaetning = async query => {
    console.log('getOpsaetning call: ', query);
    return 1;
}

const callNoResQuery = query => {
    return new Promise((resolve) => {
        resolve();
    });
}

module.exports = ({ registerHook, registerAction, getConfig, setContext }) => {
    registerAction({
        hook: '$INIT_SERVICE',
        name: SERVICE_NAME,
        trace: __filename,
        handler: () => setContext('coreappdb', { callNoResQuery, getOpsaetning }),
    });
};