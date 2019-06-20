
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('donations', tbl => {
            tbl.increments();

            tbl
                .string('name', 128)
                .notNullable()
                .unique()
            tbl
                .string('organization', 128)
                .notNullable()
            tbl
                .integer('amount')
                .notNullable()
        })
  
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('donations')
  
};
