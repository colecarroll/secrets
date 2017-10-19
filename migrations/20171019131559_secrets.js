
exports.up = function(knex, Promise) {
  return Promise.all([
      knex.schema.createTable('secrets', 
        function(table) {
      table.increments();
      table.text('secret');
    })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('secrets')
    ])
};
