'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Oferta extends Model {

  static get hidden() {
    return ['created_at', 'updated_at']
  }

  endereco () {
    return this.belongsTo('App/Models/Endereco')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }

  avaliacaoOferta () {
    return this.hasMany('App/Models/AvaliacaoOferta')
  }

  comentarioOferta () {
    return this.hasMany('App/Models/ComentarioOferta')
  }
}

module.exports = Oferta
