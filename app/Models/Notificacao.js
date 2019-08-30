'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Notificacao extends Model {

  static get hidden() {
    return ['created_at', 'updated_at']
  }

  user () {
    return this.belongsTo('App/Models/User')
  }

  oferta () {
    return this.belongsTo('App/Models/Oferta')
  }

}

module.exports = Notificacao
