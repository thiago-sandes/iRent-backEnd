'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NotificacaoSchema extends Schema {
  up () {
    this.create('notificacaos', (table) => {
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
      table.timestamps()
    })
  }

  down () {
    this.drop('notificacaos')
  }
}

module.exports = NotificacaoSchema
