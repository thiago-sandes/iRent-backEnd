'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AvaliacaoOferta extends Model {

  user () {
    return this.belongsTo('App/Models/User')
  }

  oferta () {
    return this.belongsTo('App/Models/Oferta')
  }
}

module.exports = AvaliacaoOferta
