
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('films').del()
    .then(function () {
      // Inserts seed entries
      return knex('films').insert([
        {
          id: 1, 
          name: 'Old Guard', 
          description: 'A group of mercenaries, all centuries-old immortals with the ablity to heal themselves, discover someone is onto their secret, and they must fight to protect their freedom.', 
          releaseDate: '2020-07-10', 
          rating: 1, 
          ticketPrice: '1000',
          country: 'United States',
          image: 'oldguard.png',
        },
        {
          id: 2, 
          name: 'Parasite', 
          description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan', 
          releaseDate: '2019-06-05', 
          rating: 5, 
          ticketPrice: '1500',
          country: 'China',
          image: 'parasite.png',
        },

        {
          id: 3, 
          name: 'Sonic The Hedgehog', 
          description: 'The world needed a hero -- it got a hedgehog. Powered with incredible speed, Sonic embraces his new home on Earth -- until he accidentally knocks out the power grid, sparking the attention of uncool evil genius Dr. Robotnik. Now, it\'s supervillain vs. supersonic in an all out race across the globe to stop Robotnik from using Sonic\'s unique power to achieve world domination.', 
          releaseDate: '2020-02-21', 
          rating: 3, 
          ticketPrice: '1200',
          country: 'Canada',
          image: 'sonic.png',
        },
      
      ]);
    });
};
