'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ComentarioAnuncioSchema extends Schema {
  up () {
    this.create('comentario_anuncios', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('anuncio_id')
        .unsigned()
        .references('id')
        .inTable('anuncios')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('conteudo', 1024)
      table.timestamps()
    })
  }

  down () {
    this.drop('comentario_anuncios')
  }
}

module.exports = ComentarioAnuncioSchema