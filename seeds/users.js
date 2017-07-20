exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 001, name: 'Aaron MacDonald', img: 'https://avatars0.githubusercontent.com/u/28091137?v=4&s=4', characteric: 'Coach', location_id: 1001}),
        knex('users').insert({id: 002, name: 'Annelise Toh', img: 'https://enspiral-dev-academy.slack.com/team/annelise_t_kea', characteric: 'Peace-loving', location_id: 1001}),
        knex('users').insert({id: 003, name: 'Ania Podhajska', img: 'https://avatars2.githubusercontent.com/u/26533359?v=4&s=400', characteric: 'CSS Master', location_id: 1002}),
        knex('users').insert({id: 004, name: 'Annah Gerletti', img: 'https://avatars0.githubusercontent.com/u/26911753?v=4&s=400', characteric: 'Coding Manager', location_id: 1003}),
        knex('users').insert({id: 005, name: 'Anthony Martin', img: 'https://avatars2.githubusercontent.com/u/27912970?v=4&s=400', characteric: 'Comedy Expert', location_id: 1004}),
        knex('users').insert({id: 006, name: 'Brian Bemis', img: 'https://avatars1.githubusercontent.com/u/26818161?v=4&s=400', characteric: 'Senior Citizen', location_id: 1003}),
        knex('users').insert({id: 007, name: 'Carla Weiss', img: 'https://avatars2.githubusercontent.com/u/28127059?v=4&s=400', characteric: 'Brazillian Fun Master', location_id: 1005}),
        knex('users').insert({id: 007, name: 'Chris Chou', img: 'https://enspiral-dev-academy.slack.com/team/chris_c_kea', characteric: 'Devoted Father', location_id: 1006}),
        knex('users').insert({id: 008, name: 'Gabriel Canaan', img: 'https://avatars0.githubusercontent.com/u/23735378?v=4&s=400', characteric: 'Sir Chef alot', location_id: 1001}),
        knex('users').insert({id: 009, name: 'Magda Gierg', img: 'https://avatars3.githubusercontent.com/u/26752725?v=4&s=400', characteric: 'Coding Attorney', location_id: 1002}),
        knex('users').insert({id: 010, name: 'Mike Keogh', img: 'https://avatars3.githubusercontent.com/u/25518772?v=4&s=400', characteric: 'Coding Cricket Master', location_id: 1001}),
        knex('users').insert({id: 011, name: 'Ngas Wakefield', img: 'https://avatars1.githubusercontent.com/u/28144736?v=4&s=400', characteric: 'Artistic Ninja', location_id: 1001}),
        knex('users').insert({id: 012, name: 'Rajal Kumar', img: 'https://avatars1.githubusercontent.com/u/26450541?v=4&s=400', characteric: 'GQ Rugby Player', location_id: 1001}),
        knex('users').insert({id: 013, name: 'Tom Revill', img: 'https://avatars1.githubusercontent.com/u/4327984?v=4&s=400', characteric: 'Master Designer Dude', location_id: 1001}),
        knex('users').insert({id: 014, name: 'Usha MacDonald', img: 'https://avatars3.githubusercontent.com/u/6761770?v=4&s=400', characteric: 'Smiling Vegan Expert', location_id: 1001})

      ]);
    });
};
// //we can use this table for the team table
