'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImageSchema extends Schema {
 up () {
    this.create('images', table => {
      table.increments()
      table
        .integer('oferta_id')
        .unsigned()
        .references('id')
        .inTable('ofertas')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('path').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.dropIfExists('images')
  }
}

module.exports = ImageSchema
