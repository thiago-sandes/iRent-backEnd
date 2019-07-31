'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Anuncio extends Model {

  static get hidden() {
    return ['created_at', 'updated_at']
  }

  user () {
    return this.belongsTo('App/Models/User')
  }

  avaliacaoAnuncio () {
    return this.hasMany('App/Models/AvaliacaoAnuncio')
  }
}

module.exports = Anuncio
