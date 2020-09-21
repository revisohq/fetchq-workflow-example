const { SERVICE_NAME, ...hooks } = require('./hooks');

module.exports = ({ registerHook, registerAction, getConfig, setContext, getContext }) => {
    registerAction({
        hook: '$INIT_SERVICE',
        name: SERVICE_NAME,
        trace: __filename,
        handler: () => setContext('setupRepository', {
            getSetupId: async (agreementNumber) => {
                console.log('agreementNumber:', agreementNumber);
                const { coreappdb } = getContext();
                console.log('coreappdb ', coreappdb);
                var res = await coreappdb.callQuery(`SELECT TOP 1 opsaetning FROM Opsaetning WHERE Aftalenr = ${agreementNumber}`);
                console.log('res:', res);
                if (!Array.isArray(res) || res.length != 1) {
                    throw 'No valid data obtained from db';
                } else {
                    const setupId = res[0].opsaetning;
                    if (Number.isInteger(setupId)) {
                        return setupId;
                    } else {
                        throw "Invalid db data";
                    }
                }
            }
        }),
    });
};