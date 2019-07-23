'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AvaliacaoOfertaSchema extends Schema {
  up () {
    this.create('avaliacao_ofertas', (table) => {
      table.increments()
      table
        .integer('oferta_id')
        .unsigned()
        .references('id')
        .inTable('ofertas')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('nota').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('avaliacao_ofertas')
  }
}

module.exports = AvaliacaoOfertaSchema