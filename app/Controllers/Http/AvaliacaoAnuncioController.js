'use strict'

const AvaliacaoAnuncio = use('App/Models/AvaliacaoAnuncio')
const Database = use('Database')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with avaliacaoanuncios
 */
class AvaliacaoAnuncioController {
  /**
   * Show a list of all avaliacaoanuncios.
   * GET avaliacaoanuncios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new avaliacaoanuncio.
   * GET avaliacaoanuncios/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new avaliacaoanuncio.
   * POST avaliacaoanuncios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    try {
      const data = request.post()

      const avaliacaoAnuncio = await AvaliacaoAnuncio.create(data)

      return response.status(201).send({message: "Avaliação realizada!"})
    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }

  /**
   * Display avg avaliacaoanuncio.
   * GET avaliacaoanuncios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    try {
      const media = await Database.from('avaliacao_anuncios').where('anuncio_id',params.id).avg('nota')
      
      return response.status(200).send(media)

    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }

  /**
   * Render a form to update an existing avaliacaoanuncio.
   * GET avaliacaoanuncios/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update avaliacaoanuncio details.
   * PUT or PATCH avaliacaoanuncios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    try {
      const avaliacaoAnuncio = await AvaliacaoAnuncio.findOrFail(params.id)

      const data = request.post()

      //if (avaliacaoAnuncio.id !== auth.avaliacaoAnuncio.id) {
         /// return response.status(401).send({ error: 'Não autorizado' })
      //}

      avaliacaoAnuncio.merge(data)

      await avaliacaoAnuncio.save()

      return response.status(200).send(avaliacaoAnuncio)

    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }

  /**
   * Delete a avaliacaoanuncio with id.
   * DELETE avaliacaoanuncios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = AvaliacaoAnuncioController
