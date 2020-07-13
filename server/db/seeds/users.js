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
          password: 'password', 
          createdAt: moment().format('YYYY-MM-DD HH:mm:ss')
        },
        {
          id: 2, 
          firstName: 'Danielle', 
          lastName: 'King', 
          username: 'd_king', 
          password: 'password', 
          createdAt: moment().format('DD/MM/YYYY HH:mm:ss')
        },
        {
          id: 3, 
          firstName: 'Joey', 
          lastName: 'Tribianni', 
          username: 'j_tribiani', 
          password: 'password', 
          createdAt: moment().format('DD/MM/YYYY HH:mm:ss')
        },
      ]);
    });
};
