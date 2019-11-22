exports.up = function(knex) {
  return knex.schema.createTable('conversions', (tbl) => {
    tbl.increments();

    tbl
      .text('ingredient', 128)
      .unique()
      .notNullable();

    tbl.decimal('gramsPerTsp').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('conversions');
};
