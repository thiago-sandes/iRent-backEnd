'use strict'

const Notificacao = use('App/Models/Notificacao')
const User = use("App/Models/User")
const Oferta = use('App/Models/Oferta')
const Database = use('Database')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with notificacaos
 */
class NotificacaoController {
  /**
   * Show a list of all notificacaos.
   * GET notificacaos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    try {
      const notificacao = await Notificacao.query()
            .with('user')
            .with('oferta')
            .fetch()

      return response.status(200).send(notificacao);
    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }

  /**
   * Create/save a new notificacao.
   * POST notificacaos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    try {
      const data = request.post();
      const getNotificacao = await Database.select('*')
        .from('notificacaos')
        .where('notificacaos.user_id', data.user_id)
        .where('notificacaos.oferta_id', data.oferta_id)

      if(getNotificacao.length > 0){
        return response.status(403).send({message: "Interesse Já Cadastrado"});
      }

      const notificacao = await Notificacao.create(data);

      return response.status(201).send({message: "Interesse Realizado"});
    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }

  /**
   * Display a single notificacao.
   * GET notificacaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    try {
      const notificacao = await Notificacao.findOrFail(params.id);

      await notificacao.loadMany(['user', 'oferta']);

      return response.status(200).send(notificacao);

    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }

   async getInteresse ({ params, request, response, view }) {
    try {
      const notificacao = await Database.select('ofertas.id', 'ofertas.titulo', 'ofertas.descricao', 'users.name', 'users.email', 'users.telephone')
        .from('ofertas')
        .join('notificacaos', function() {
          this.on('ofertas.id', '=' ,'notificacaos.oferta_id')
        })
        .join('users', function() {
          this.on('notificacaos.user_id', '=' ,'users.id')
        })
        .where('ofertas.user_id', params.idUser)

      return response.status(200).send(notificacao);

    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }

  async getInteresseOferta ({ params, request, response, view }) {
    try {
      const notificacao = await Database.select('ofertas.titulo', 'ofertas.descricao', 'users.name', 'users.email', 'users.telephone')
        .from('ofertas')
        .join('notificacaos', function() {
          this.on('ofertas.id', '=' ,'notificacaos.oferta_id')
        })
        .join('users', function() {
          this.on('notificacaos.user_id', '=' ,'users.id')
        })
        .where('ofertas.user_id', params.idUser)
        .where('ofertas.id', params.idOferta)

      return response.status(200).send(notificacao);

    } catch (error) {
      console.log(error)
      return response.status(error.status).send({message: error})
    }
  }

  /**
   * Delete a notificacao with id.
   * DELETE notificacaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const notificacao = await Notificacao.findOrFail(params.id);

      await notificacao.delete();

      return response.status(200).send({message: "Notificacao removido"});
    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }
}

module.exports = NotificacaoController
