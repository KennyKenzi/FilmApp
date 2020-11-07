
exports.up = function(knex) {
    return knex.schema.createTable('token', function(table) {
        table.increments('id').notNullable();
        table.string('token').notNullable();

        
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('token');
};
