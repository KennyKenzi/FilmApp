
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
        table.increments('id').notNullable();
        table.string('firstName').notNullable();
        table.string('lastName').notNullable();
        table.string('username').notNullable().unique();
        table.string('password').notNullable();
        table.dateTime('createdAt').notNullable();
        
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
 