exports.seed = function (knex, Promise) {
  return knex('profiles').del()
    .then(function () {
      return Promise.all([
        knex('profiles').insert({name: 'Aaron MacDonald', image: 'https://avatars0.githubusercontent.com/u/28091137?v=4&s=4', characteric: 'Coach', location_id: 1001}),
        knex('profiles').insert({name: 'Annelise Toh', image: 'https://enspiral-dev-academy.slack.com/team/annelise_t_kea', characteric: 'Peace-loving', location_id: 1001}),
        knex('profiles').insert({name: 'Ania Podhajska', image: 'https://avatars2.githubusercontent.com/u/26533359?v=4&s=400', characteric: 'CSS Master', location_id: 1002}),
        knex('profiles').insert({name: 'Annah Gerletti', image: 'https://avatars0.githubusercontent.com/u/26911753?v=4&s=400', characteric: 'Coding Manager', location_id: 1003}),
        knex('profiles').insert({name: 'Anthony Martin', image: 'https://avatars2.githubusercontent.com/u/27912970?v=4&s=400', characteric: 'Comedy Expert', location_id: 1004}),
        knex('profiles').insert({name: 'Brian Bemis', image: 'https://avatars1.githubusercontent.com/u/26818161?v=4&s=400', characteric: 'Senior Citizen', location_id: 1003}),
        knex('profiles').insert({name: 'Carla Weiss', image: 'https://avatars2.githubusercontent.com/u/28127059?v=4&s=400', characteric: 'Brazillian Fun Master', location_id: 1005}),
        knex('profiles').insert({name: 'Chris Chou', image: 'https://enspiral-dev-academy.slack.com/team/chris_c_kea', characteric: 'Devoted Father', location_id: 1006}),
        knex('profiles').insert({name: 'Gabriel Canaan', image: 'https://avatars0.githubusercontent.com/u/23735378?v=4&s=400', characteric: 'Sir Chef alot', location_id: 1001}),
        knex('profiles').insert({name: 'Magda Gierg', image: 'https://avatars3.githubusercontent.com/u/26752725?v=4&s=400', characteric: 'Coding Attorney', location_id: 1002}),
        knex('profiles').insert({name: 'Mike Keogh', image: 'https://avatars3.githubusercontent.com/u/25518772?v=4&s=400', characteric: 'Coding Cricket Master', location_id: 1001}),
        knex('profiles').insert({name: 'Ngas Wakefield', image: 'https://avatars1.githubusercontent.com/u/28144736?v=4&s=400', characteric: 'Artistic Ninja', location_id: 1001}),
        knex('profiles').insert({name: 'Rajal Kumar', image: 'https://avatars1.githubusercontent.com/u/26450541?v=4&s=400', characteric: 'GQ Rugby Player', location_id: 1001}),
        knex('profiles').insert({name: 'Tom Revill', image: 'https://avatars1.githubusercontent.com/u/4327984?v=4&s=400', characteric: 'Master Designer Dude', location_id: 1001}),
        knex('profiles').insert({name: 'Usha MacDonald', image: 'https://avatars3.githubusercontent.com/u/6761770?v=4&s=400', characteric: 'Smiling Vegan Expert', location_id: 1001})

      ]);
    });
};
// //we can use this table for the team table
