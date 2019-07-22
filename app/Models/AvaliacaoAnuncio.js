'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AvaliacaoAnuncio extends Model {

  user () {
    return this.belongsTo('App/Models/User')
  }

  anuncio () {
    return this.belongsTo('App/Models/Anuncio')
  }
}

module.exports = AvaliacaoAnuncio
