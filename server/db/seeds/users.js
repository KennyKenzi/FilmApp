var moment = require ('moment')


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1, 
          firstName: 'Basil', 
          lastName: 'Dingall', 
          username: 'b_dingall', 
          password: '$2b$10$bm4.E4pmhCxfm2/6OtYL5egNbqr6ErwMuLrk/P0.G0chVPIstV/MG', 
          createdAt: moment().format('YYYY-MM-DD HH:mm:ss')
        },
        {
          id: 2, 
          firstName: 'Danielle', 
          lastName: 'King', 
          username: 'd_king', 
          password: '$2b$10$bm4.E4pmhCxfm2/6OtYL5egNbqr6ErwMuLrk/P0.G0chVPIstV/MG', 
          createdAt: moment().format('YYYY-MM-DD HH:mm:ss')
        },
        {
          id: 3, 
          firstName: 'Joey', 
          lastName: 'Tribianni', 
          username: 'j_tribiani', 
          password: '$2b$10$bm4.E4pmhCxfm2/6OtYL5egNbqr6ErwMuLrk/P0.G0chVPIstV/MG',
          createdAt: moment().format('YYYY-MM-DD HH:mm:ss')
        },
      ]);
    });
};
