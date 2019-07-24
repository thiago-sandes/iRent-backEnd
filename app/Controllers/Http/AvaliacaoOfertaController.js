'use strict'

const AvaliacaoOferta = use('App/Models/AvaliacaoOferta')
const Database = use('Database')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with avaliacaoofertas
 */
class AvaliacaoOfertaController {
  /**
   * Show a list of all avaliacaoofertas.
   * GET avaliacaoofertas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new avaliacaooferta.
   * GET avaliacaoofertas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new avaliacaooferta.
   * POST avaliacaoofertas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    try {
      const data = request.post();

      const avaliacaoOferta = await AvaliacaoOferta.create(data);

      return response.status(201).send({message: "Avaliação realizada!"});
    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }

  /**
   * Display avg avaliacaooferta.
   * GET avaliacaoofertas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    try {
      const media = await Database.from('avaliacao_ofertas').where('oferta_id',params.id).avg('nota')
      
      return response.status(200).send(media)

    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }

  /**
   * Render a form to update an existing avaliacaooferta.
   * GET avaliacaoofertas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update avaliacaooferta details.
   * PUT or PATCH avaliacaoofertas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    try {
      const avaliacaoOferta = await AvaliacaoOferta.findOrFail(params.id);

      const data = request.post();

      //if (avaliacaoOferta.id !== auth.avaliacaoOferta.id) {
         /// return response.status(401).send({ error: 'Não autorizado' })
      //}

      avaliacaoOferta.merge(data);

      await avaliacaoOferta.save();

      return response.status(200).send(avaliacaoOferta);

    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }

  /**
   * Delete a avaliacaooferta with id.
   * DELETE avaliacaoofertas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = AvaliacaoOfertaController
