// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/web-store'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-web-store'
  }
};
