
module.exports = {
  getProfiles: getProfiles,
  getProfilePage: getProfilePage
}

function getProfiles (connection) {
  return connection('profiles').select()
}

function getProfilePage (id, connection) {
  return connection('profiles')
    .where('profiles.id', id)      
      .select('profiles.*', 'locations.*')
      .join('locations', 'locations.id' , '=', 'location_id')

      .first()
}
