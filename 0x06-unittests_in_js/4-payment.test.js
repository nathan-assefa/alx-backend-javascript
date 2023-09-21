const { describe, it } = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function() {
  it("should stub Utils.calculateNumber and log the correct message", function() {
    // Stub Utils.calculateNumber to always return 10
    sinon.stub(Utils, "calculateNumber").returns(10);

    // Spy on console.log
    const logSpy = sinon.spy(console, "log");

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assertions
    assert(logSpy.calledOnceWith("The total is: 10"));
    assert(Utils.calculateNumber.calledOnceWith("SUM", 100, 20));

    // Clean up the stub and spy
    Utils.calculateNumber.restore();
    logSpy.restore();
  });
});
