
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_secrets').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_secrets').insert([
        {id: 1, user_id: 1, secret_id: 1}
      ]);
    });
};
