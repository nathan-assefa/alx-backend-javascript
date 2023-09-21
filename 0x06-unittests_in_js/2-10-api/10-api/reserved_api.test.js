const request = require('request');
const { expect } = require('chai');

const URL = 'http://localhost:7865';

describe('Index page', () => {
  it('should return the correct status code for the index page', (done) => {
    request.get(URL, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct result for the index page', (done) => {
    request.get(URL, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  it('should return the correct status code when :id is a number', (done) => {
    request.get(`${URL}/cart/6`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct result when :id is a number', (done) => {
    request.get(`${URL}/cart/6`, (err, res, body) => {
      expect(body).to.equal('Payment methods for cart 6');
      done();
    });
  });
});
