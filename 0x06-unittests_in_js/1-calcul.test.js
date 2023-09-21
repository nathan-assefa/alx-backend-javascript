const { describe, it } = require('mocha');
const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
  it('should return the sum of two numbers', function () {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('should return the subtraction of two numbers', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('should return the division of two numbers', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('should return "Error" when we try to divide by 0', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
