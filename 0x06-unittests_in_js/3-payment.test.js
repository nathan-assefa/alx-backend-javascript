const { describe, it } = require('mocha');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with the correct arguments', () => {
    // Create a spy on the Utils.calculateNumber function
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Call the sendPaymentRequestToApi function
    sendPaymentRequestToApi(100, 20);

    // Assert that Utils.calculateNumber was called with the correct arguments
    sinon.assert.calledWithExactly(calculateNumberSpy, 'SUM', 100, 20);
    // expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;

    // Restore the original Utils.calculateNumber function
    calculateNumberSpy.restore();
  });
});
