exports.up = function (knex, Promise) {
  return knex.schema.createTable('profiles', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.integer('image')
    table.string('characteric')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}
