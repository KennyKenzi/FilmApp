
exports.up = function(knex) {
  
    return knex.schema.createTable('films', function(table) {
        table.increments('id');
        table.string('name');
        table.string('description');
        table.dateTime('releaseDate');
        table.integer('rating');
        table.string('ticketPrice');
        table.string('Country');
        table.string('genre')
        table.string('image')
        
    });


};

exports.down = function(knex) {
    return knex.schema.dropTable('films');
};
