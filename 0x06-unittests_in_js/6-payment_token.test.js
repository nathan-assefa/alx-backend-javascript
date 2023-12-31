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
      });
  });
});
