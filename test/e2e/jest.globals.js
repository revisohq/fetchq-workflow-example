const axios = require('axios');
const env = require('./jest.env')();

const pause = (delay = 0) => new Promise(r => setTimeout(r, delay));

const statusCheck = async (endpoint, test) => {
  try {
    const res = await axios.get(endpoint);
    return test(res);
  } catch (err) {
    return false;
  }
};

const serverIsUp = async prefix => {
  console.info(`[${prefix}] await for server's health check...`);
  console.info(`[${prefix}] ${env.TEST_STATUS_CHECK_URL}`);

  let isup = false;
  while (isup === false) {
    await pause(env.TEST_STATUS_CHECK_INTERVAL);
    isup = await statusCheck(
      env.TEST_STATUS_CHECK_URL,
      res => res.status === 200,
    );
  }

  console.info(`[${prefix}] server is up...`);
};

const resetFetchq = async () => {
  const res = await axios.get(`${env.TEST_SERVER_ROOT}/test/fetchq/reset`);
  return res.data;
};

/**
 * It pings a queue or a list of queues to figure out a specific status
 * for a specific subject.
 *
 * Returns boolean and throws an error if it goes in timeout
 *
 * @param {*} subject
 * @param {*} queues
 * @param {*} status
 * @param {*} delay
 * @param {*} timeout
 */
const checkStatus = async (
  subject,
  queues,
  status = 3,
  delay = 100,
  timeout = 5000,
) => {
  let res = false;
  let ck = true;

  const timer = setTimeout(() => {
    ck = false;
  }, timeout);

  while (res === false && ck === true) {
    // console.log('test', subject, queues);
    // Api call to get the status of a particular subject
    const __res = await axios.post(
      `${env.TEST_SERVER_ROOT}/test/fetchq/checkStatus`,
      {
        subject,
        queues,
        status,
      },
    );

    // console.log(__res.data);

    // delay in between failing attempts
    res = __res.data;
    if (!res) await pause(delay);
  }

  // In case of timeout, throw an error so to fail the test
  if (ck === false) {
    throw new Error('timeout');
  }

  // In case of clear end, needs to cleanup the timer
  clearTimeout(timer);
  return res;
};

module.exports = () => ({
  axios,
  env,
  pause,
  statusCheck,
  serverIsUp,
  resetFetchq,
  checkStatus,
  get: url => axios.get(`${env.TEST_SERVER_ROOT}${url}`),
  post: (url, data, options) =>
    axios.post(`${env.TEST_SERVER_ROOT}${url}`, data, options),
});
