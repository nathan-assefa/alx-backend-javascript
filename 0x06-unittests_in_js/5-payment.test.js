const { describe, it, beforeEach, afterEach } = require('mocha');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const assert = require('assert');

describe('sendPaymentRequestToApi', function () {
  let logSpy;

  beforeEach(() => {
    logSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    logSpy.restore();
  });

  it('should log "The total is: 120" when called with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    assert(logSpy.calledOnceWith(`The total is: ${120}`));
  });

  it('should log "The total is: 20" when called with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    assert(logSpy.calledOnceWith(`The total is: ${20}`));
  });
});
