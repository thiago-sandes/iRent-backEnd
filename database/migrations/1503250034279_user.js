'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
<<<<<<< HEAD
=======
      table.string('telephone', 30).notNullable()
      table.string('name', 254).notNullable()
      table.string('sex', 1).notNullable()
>>>>>>> 4694a81cce5e3a23d9ac89dd8a31ab2130f57b90
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
