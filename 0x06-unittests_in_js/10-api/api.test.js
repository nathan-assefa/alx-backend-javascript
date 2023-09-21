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

  it('should return the correct status code when :id is NOT a number', (done) => {
    request.get(`${URL}/cart/abc`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available Payments page', () => {
  it('should return the correct payment methods', (done) => {
    request.get(`${URL}/available_payments`, (err, res, body) => {
      const expectedPaymentMethods = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expectedPaymentMethods);
      done();
    });
  });
});

/**
describe('Login page', () => {
  it('should return a welcome message', (done) => {
    const userName = 'Betty';
    const requestData = { userName };
    request.post(
      {
        url: `${URL}/login`,
        json: true,
        body: requestData
      },
      (err, res, body) => {
        expect(body).to.equal(`Welcome ${userName}`);
        done();
      }
    );
  });
}); **/

describe("Login", function() {
    it("check correct status code for request that's sent properly", function(done) {
	const opt = {
	    url: "http://localhost:7865/login",
	    json: true,
	    body: {
		userName: 'JOE'
	    }
	};
	request.post(opt, function(err, res, body) {
	    expect(res.statusCode).to.equal(200);
	    done();
	});
    });
    it("check correct content for request that's sent properly", function(done) {
	const opts = {
	    url: "http://localhost:7865/login",
	    json: true,
	    body: {
		userName: 'JOE'
	    }
	};
	request.post(opts, function(err, res, body) {
	    if (err) {
		expect(res.statusCode).to.not.equal(200);
	    } else {
		expect(body).to.contain('Welcome JOE');
	    }
	    done();
	});
    });
    it("check correct status code for request that's not sent properly", function(done) {
	const op = {
	    url: "http://localhost:7865/login",
	    json: true,
	    body: {
		usame: 'JOE'
	    }
	};
	request.post(op, function(err, res, body) {
	    expect(res.statusCode).to.equal(404);
	    done();
	});
    });
});
