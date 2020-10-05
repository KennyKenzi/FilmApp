
exports.up = function(knex) {
    return knex.schema.createTable('countries', function(table) {
        table.string('code').notNullable();
        table.string('name').notNullable();

        
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('countries');
};
