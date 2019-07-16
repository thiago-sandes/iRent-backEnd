'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnuncioSchema extends Schema {
  up () {
    this.create('anuncios', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('titulo', 100).notNullable()
      table.string('descricao', 1024).notNullable()
      table.string('preferencia', 1024)
      table.integer('qtdCurtidas').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('anuncios')
  }
}

module.exports = AnuncioSchema
