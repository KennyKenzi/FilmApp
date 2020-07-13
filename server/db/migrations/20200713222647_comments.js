
exports.up = function(knex) {
    return knex.schema.createTable('comments', function(table) {
        table.increments('id').notNullable();
        table.integer('filmID').notNullable();
        table.string('userID').notNullable();
        table.text('comment').notNullable();
        table.dateTime('createdAt').notNullable();
        
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('comments');
  
};
