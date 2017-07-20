
module.exports = {
  getProfiles: getProfiles,
  getProfile: getProfile
}

function getProfiles (connection) {
  return connection('profiles').select()
}

function getProfile (id, connection) {
  return connection('users').where('id', id)
}
