/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("book", (table) => {
    table.increments("id").primary()
    table.string("titulo").notNullable()
    table.integer("edicao")
    table.integer("num_paginas")
    table.integer("ano_publicacao")
    table.string("isbn", 13)
    table.integer("num_exemplares").notNullable()
    table.string("idioma", 50).notNullable()
    table.integer("id_autor").notNullable().unsigned()
    table.integer("id_editora").notNullable().unsigned()

    table.foreign("id_autor").references("id").inTable("others")
    table.foreign("id_editora").references("id").inTable("publishing_company")
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("book")
}
