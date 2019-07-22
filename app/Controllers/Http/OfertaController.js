'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Oferta = use('App/Models/Oferta')

/**
 * Resourceful controller for interacting with ofertas
 */
class OfertaController {
  /**
   * Show a list of all ofertas.
   * GET ofertas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const ofertas = Oferta.all()
    return ofertas
  }

  /**
   * Create/save a new oferta.
   * POST ofertas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
async store ({ auth, request, response }) {
  const { id } = auth.user
  const data = request.only([
    'title',
    'address',
    'latitude',
    'longitude',
    'price'
  ])

  const oferta = await Oferta.create({ ...data, user_id: id })

  return oferta
}

  /**
   * Display a single oferta.
   * GET ofertas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
  const oferta = await Oferta.findOrFail(params.id)

  await oferta.load('images')

  return oferta
}

  
  /**
   * Update oferta details.
   * PUT or PATCH ofertas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
      const oferta = await Oferta.findOrFail(params.id)

       const data = request.only([
    'title',
    'address',
    'latitude',
    'longitude',
    'price'
  ])

  oferta.merge(data)

    await oferta.save()

    return oferta
  }

  /**
   * Delete a oferta with id.
   * DELETE ofertas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, auth, response }) {
    const property = await Property.findOrFail(params.id)

    if (property.user_id !== auth.user.id) {
      return response.status(401).send({ error: 'Not authorized' })
    }

    await property.delete()
  }
}

module.exports = OfertaController
