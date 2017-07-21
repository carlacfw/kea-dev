
module.exports = {
  getUser: getUser,
  getUsers: getUsers
}

function getUsers (connection) {
  return connection('profiles').select()
}

function getUser (id, connection) {
  return connection('profiles').where('id', id)
}
