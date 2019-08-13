'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Anuncio = use('App/Models/Anuncio')

/**
 * Resourceful controller for interacting with anuncios
 */
class AnuncioController {
  /**
   * Show a list of all anuncios.
   * GET anuncios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
     try {
      const anuncios = await Anuncio.query()
            .with('user')
            .fetch()

      return response.status(200).send(anuncios);
    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }

  /**
   * Create/save a new anuncio.
   * POST anuncios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    try {
      const data = request.post();

      const anuncio = await Anuncio.create(data);

      return response.status(201).send({message: "Anuncio criado"});
    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }

  async getIdAnuncios ({ response, auth, params }) {
    try {
      const anuncios = await Anuncio.query()
            .where('user_id',params.id)
            .fetch();

      return response.status(200).send(anuncios);

    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }

  /**
   * Display a single anuncio.
   * GET anuncios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    try {
      const anuncio = await Anuncio.findOrFail(params.id);
      await anuncio.load('user')

      return response.status(200).send(anuncio);

    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }

  /**
   * Update anuncio details.
   * PUT or PATCH anuncios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
     try {
      const anuncio = await Anuncio.findOrFail(params.id);

      const data = request.post();

      //if (anuncio.id !== auth.anuncio.id) {
         /// return response.status(401).send({ error: 'Não autorizado' })
      //}

      anuncio.merge(data);

      await anuncio.save();

      return response.status(200).send(anuncio);

    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }

  /**
   * Delete a anuncio with id.
   * DELETE anuncios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const anuncio = await Anuncio.findOrFail(params.id);

      await anuncio.delete();

      return response.status(200).send({message: "Anuncio removido"});
    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }
}

module.exports = AnuncioController
