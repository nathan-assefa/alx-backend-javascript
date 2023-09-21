function getPaymentTokenFromAPI (success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  } else {
    // Return a rejected promise to simulate failure
    return Promise.reject(new Error('API request failed'));
  }
}

module.exports = getPaymentTokenFromAPI;
