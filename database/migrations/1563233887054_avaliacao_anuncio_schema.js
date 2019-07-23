'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AvaliacaoAnuncioSchema extends Schema {
  up () {
    this.create('avaliacao_anuncios', (table) => {
      table.increments()
      table
        .integer('anuncio_id')
        .unsigned()
        .references('id')
        .inTable('anuncios')
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
    this.drop('avaliacao_anuncios')
  }
}

module.exports = AvaliacaoAnuncioSchema