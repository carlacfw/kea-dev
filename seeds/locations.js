exports.seed = function (knex, Promise) {
  return knex('locations').del()
    .then(function () {
      return Promise.all([
      knex('locations').insert({location: 'New Zealand'}),
      knex('locations').insert({location: 'Poland'}),
      knex('locations').insert({location: 'United States'}),
      knex('locations').insert({location: 'Ireland'}),
      knex('locations').insert({location: 'Brazil'}),
      knex('locations').insert({location: 'Taiwan'})
    ]);
  });
};
