const request = require('supertest');
const app = require('./index'); // Import your app logic

// Test suite for the main application
describe('GET /home', () => {

  // Test case
  it('should respond with a 200 status and "Hello, World!" JSON', async () => {
    
    // 'await' performs the request and waits for the response
    const response = await request(app)
      .get('/')
      .expect('Content-Type', /json/) // Check that the content-type header is "application/json"
      .expect(200); // Check that the status code is 200

    // Check the response body
    expect(response.body).toEqual({ message: "Hello, World!" });
  });

});