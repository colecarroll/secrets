
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('users',
  function(table) {
    table.increments();
    table.varchar('username');
    table.varchar('email');
    table.varchar('code');
    })
]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTableIfExists('users')
  ]);
};
