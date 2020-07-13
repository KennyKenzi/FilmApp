
exports.up = function(knex) {
  
    return knex.schema.createTable('films', function(table) {
        
        table.increments('id').notNullable();
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.dateTime('releaseDate').notNullable();
        table.integer('rating').notNullable();
        table.string('ticketPrice').notNullable();
        table.string('Country').notNullable();
        table.string('genre').notNullable();
        table.string('image').notNullable();
        table.specificType('comments', 'text []')
        
    });


};

exports.down = function(knex) {
    return knex.schema.dropTable('films');
};
