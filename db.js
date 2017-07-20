
module.exports = {
  getProfiles: getProfiles,
  getProfilePage: getProfilePage
}

function getProfiles (connection) {
  return connection('profiles').select()
}

function getProfilePage (id, connection) {
  return connection('profiles')
      .join('locations', 'id' , '=', 'location_id')
      .select('profiles.*', 'locations.*')
      .where('id', id)
      .first()
}
