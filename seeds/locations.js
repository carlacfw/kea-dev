exports.seed = function (knex, Promise) {
  return knex('locations').del()
    .then(function () {
      return Promise.all([
      knex('locations').insert({id: 1001, location: 'New Zealand'}),
      knex('locations').insert({id: 1002, location: 'Poland'}),
      knex('locations').insert({id: 1003, location: 'United States'}),
      knex('locations').insert({id: 1004, location: 'Ireland'}),
      knex('locations').insert({id: 1005, location: 'Brazil'}),
      knex('locations').insert({id: 1006, location: 'Taiwan'})
    ]);
  });
};
