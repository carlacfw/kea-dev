exports.seed = function (knex, Promise) {
  return knex('locations').del()
    .then(function () {
      return Promise.all([
      knex('locations').insert({id: , user_id: location: }),
      knex('locations').insert({id: , user_id: location: }),
      knex('locations').insert({id: , user_id: location: })
      knex('locations').insert({id: , user_id: location: })
      knex('locations').insert({id: , user_id: location: })
      knex('locations').insert({id: , user_id: location: })
      knex('locations').insert({id: , user_id: location: })
      knex('locations').insert({id: , user_id: location: })
      knex('locations').insert({id: , user_id: location: })
      knex('locations').insert({id: , user_id: location: })
      knex('locations').insert({id: , user_id: location: })
      knex('locations').insert({id: , user_id: location: })
      knex('locations').insert({id: , user_id: location: })
      knex('locations').insert({id: , user_id: location: })
      knex('locations').insert({id: , user_id: location: })
      ])
