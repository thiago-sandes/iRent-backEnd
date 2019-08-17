'use strict'

const Oferta = use('App/Models/Oferta')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

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
  async index ({ request, response, auth}) {
    try {
      const ofertas = await Oferta.query()
            .with('image')
            .fetch()

      return response.status(200).send(ofertas);
    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }

   async getIdOfertas ({ request, response, auth, params }) {
    try {

      const ofertas = await Oferta.query()
            .where('user_id',params.id)
            .with('image')
            .fetch();

      return response.status(200).send(ofertas)

    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }

  async getFilter ({ request, response, auth}) {
    try {
      const filtros = request.post()
      if(Object.keys(filtros)[0] == 'restricao'){
        const ofertas = await Oferta.query()
         .where('restricao', 'LIKE', '%'+Object.values(filtros)[0]+'%')
         .with('image')
         .fetch()
        return response.status(200).send(ofertas);
      } else {
        const ofertas = await Oferta.query()
         .where('preco', '>=', filtros.preco.min)
         .where('preco', '<=', filtros.preco.max)
         .with('image')
         .fetch()
         return response.status(200).send(ofertas);
      }
    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }

  /**
   * Create/save a new oferta.
   * POST ofertas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    try {
      const data = request.post();

      const oferta = await Oferta.create(data);

      return response.status(201).send({message: "Oferta criada"});
    } catch (error) {
      return response.status(error.status).send({message: error})
    }
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
  async show ({ params, request, response }) {
    try {
      const oferta = await Oferta.findOrFail(params.id);
      await oferta.loadMany(['image', 'comentarioOferta'])

      return response.status(200).send(oferta);

    } catch (error) {
      return response.status(error.status).send({message: error})
    }
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
    try {
      const oferta = await Oferta.findOrFail(params.id);

      const data = request.post();

      //if (oferta.id !== auth.oferta.id) {
         /// return response.status(401).send({ error: 'Não autorizado' })
      //}

      oferta.merge(data);

      await oferta.save();

      return response.status(200).send(oferta);

    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }

  /**
   * Delete a oferta with id.
   * DELETE ofertas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const oferta = await Oferta.findOrFail(params.id);

      await oferta.delete();

      return response.status(200).send({message: "Oferta removida"});
    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }
}

module.exports = OfertaController
