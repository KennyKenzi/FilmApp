var moment = require('moment')


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, filmID: 1, userID: 3, comment: 'This was gut', createdAt: moment().format('YYYY-MM-DD HH:mm:ss') },
        {id: 2, filmID: 2, userID: 2, comment: 'This was alright, nicht so gut', createdAt: moment().format('YYYY-MM-DD HH:mm:ss') },
        {id: 3, filmID: 3, userID: 2, comment: 'This was gut', createdAt: moment().format('YYYY-MM-DD HH:mm:ss') },
        {id: 4, filmID: 1, userID: 3, comment: 'This was just trying to be fdifeerient', createdAt: moment().format('YYYY-MM-DD HH:mm:ss') },
        {id: 5, filmID: 2, userID: 1, comment: 'Dis is a comment, nicht so gut', createdAt: moment().format('YYYY-MM-DD HH:mm:ss') },
        {id: 6, filmID: 3, userID: 2, comment: 'Lorem Ipsum something or other', createdAt: moment().format('YYYY-MM-DD HH:mm:ss') }
      ]);
      
    });
};
