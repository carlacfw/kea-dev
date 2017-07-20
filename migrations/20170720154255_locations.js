exports.up = function (knex, Promise) {
  return knex.schema.createTable('locations', function (table) {
    table.increments('id').primary() //primary key
    table.integer('user_id') //foriegn key from usser table
    table.string('location')


  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('locations')
}
