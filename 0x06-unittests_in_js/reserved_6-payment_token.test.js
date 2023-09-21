const { describe, it } = require('mocha');
const getPaymentTokenFromAPI = require('./6-payment_token');
const assert = require('assert');

describe('getPaymentTokenFromAPI', function () {
  it('should resolve with the correct response when success is true', function (done) {
    // Call the async function
    getPaymentTokenFromAPI(true)
      .then((response) => {
        // Assertions on the resolved value
        assert.deepStrictEqual(response, { data: 'Successful response from the API' });
        // Call done to indicate that the test is complete
        done();
      })
      .catch((error) => {
        // Handle any errors
        done(error);
      });
  });

  it('should reject with an error when success is false', function (done) {
    // Call the async function
    getPaymentTokenFromAPI(false)
      .then(() => {
        // This should not be executed as it's expected to reject
        done(new Error('Expected rejection but got resolution'));
      })
      .catch((error) => {
        // Assertions on the error
        assert(error instanceof Error);
        // Call done to indicate that the test is complete
        done();
      });
  });
});
