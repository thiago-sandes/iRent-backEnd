'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ComentarioOfertaSchema extends Schema {
  up () {
    this.create('comentario_ofertas', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('oferta_id')
        .unsigned()
        .references('id')
        .inTable('ofertas')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('conteudo', 1024)
      table.timestamps()
    })
  }

  down () {
    this.drop('comentario_ofertas')
  }
}

module.exports = ComentarioOfertaSchema
