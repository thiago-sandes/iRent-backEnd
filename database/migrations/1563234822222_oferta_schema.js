'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OfertaSchema extends Schema {
  up () {
    this.create('ofertas', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('endereco_id')
        .unsigned()
        .references('id')
        .inTable('enderecos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('titulo', 100).notNullable()
      table.string('telefone', 100).notNullable()
      table.string('descricao', 1024).notNullable()
      table.decimal('preco').notNullable()
      table.string('restricao', 1024)
      table.timestamps()
    })
  }

  down () {
    this.drop('ofertas')
  }
}

module.exports = OfertaSchema
