/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("book", (table) => {
      table.increments("id");
      table.string("title").notNullable().unique();
      table.string("author").notNullable().unique();
      table.string("borrowed_by").nullable();
      table.string("date_borrowed").notNullable();
      table.string("return_date").notNullable();
      table.timestamps(true, true);
    })
    .createTable("student", (table) => {
      table.increments("id");
      table.string("first_name").nullable();
      table.string("last_name").nullable();
      table.string("book_title").references("title").inTable("book").nullable();
      table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("book").dropTable("student");
};
