
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('films').del()
    .then(function () {
      // Inserts seed entries
      return knex('films').insert([
        {
          id: 1, 
          name: 'rowValue1', 
          description: 'rowValue1', 
          releaseDate: 'rowValue1', 
          rating: 1, 
          ticketPrice: 'rowValue1',
          country: 'rowValue1',
          image: 'rowValue1',
        },
        {
          id: 2, 
          name: 'rowValue1', 
          description: 'rowValue1', 
          releaseDate: 'rowValue1', 
          rating: 5, 
          ticketPrice: 'rowValue1',
          country: 'rowValue1',
          image: 'rowValue1',
        },
      
      ]);
    });
};
