
module.exports = {
  getProfiles: getProfiles,
  getProfilePage: getProfilePage
}
//this is the profile page with a list of names!
function getProfiles (connection) {
  return connection('profiles').select()
}

//this is the individual profile page
function getProfilePage (id, connection) {
  return connection('profiles')
    .where('profiles.id', id)
    .select('profiles.*', 'locations.*')
    .join('locations', 'locations.id' , '=', 'location_id')
    .first()
}
