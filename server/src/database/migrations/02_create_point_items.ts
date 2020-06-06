import Knex from "knex";

// Create table
export async function up(knex: Knex) {
  return knex.schema.createTable("point_items", (table) => {
    table.increments("id").primary();
    table.integer("point_id").notNullable().references("id").inTable("points");
    table.integer("item_id").notNullable().references("id").inTable("items");
  });
}

// Drop table
export async function down(knex: Knex) {
  return knex.schema.dropTable("point_items");
}
