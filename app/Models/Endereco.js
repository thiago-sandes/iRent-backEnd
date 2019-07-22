'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Endereco extends Model {

  oferta () {
    return this.hasMany('App/Models/Oferta')
  }
}

module.exports = Endereco
