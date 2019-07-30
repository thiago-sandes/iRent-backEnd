'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Image extends Model {

	getUrl ({ path }) {
    return `${Env.get('APP_URL')}/images/${path}`
  }

  oferta () {
    return this.belongsTo('App/Models/Oferta')
  }
}

module.exports = Image
