'use strict'

const Endereco = use('App/Models/Endereco')
const Database = use('Database')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with enderecos
 */
class EnderecoController {
  /**
   * Show a list of all enderecos.
   * GET enderecos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    try {
      const enderecos = await Endereco.all()

      return response.status(200).send(enderecos)

    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }

  /**
   * Render a form to be used for creating a new endereco.
   * GET enderecos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new endereco.
   * POST enderecos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    try {
      const data = request.post()

      const endereco = await Database.from('enderecos').where('oferta_id',data.oferta_id)

      if(!Object.keys(endereco).length){
         await Endereco.create(data)
         return response.status(201).send({message: "Endereço cadastrado!"})
      }else{
        return response.status(409).send(({message: "Endereço já cadastrado!"}))
      }
    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }

  /**
   * Display a single endereco.
   * GET enderecos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    try {
      const endereco = await Database.from('enderecos').where('endereco_id',params.id)

      return response.status(200).send(endereco)

    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }

  /**
   * Show a endereco by oferta.
   * GET endereco by oferta
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async getEnderecoOferta({  params, request, response }) {
    try {
      const endereco = await Database.from('enderecos').where('oferta_id',params.oferta_id)

      return response.status(200).send(endereco)

    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }


  /**
   * Render a form to update an existing endereco.
   * GET enderecos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update endereco details.
   * PUT or PATCH enderecos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    try {
      const endereco = await Endereco.findOrFail(params.id)

      const data = request.post()

      //if (endereco.id !== auth.endereco.id) {
         /// return response.status(401).send({ error: 'Não autorizado' })
      //}

      endereco.merge(data)

      await endereco.save()

      return response.status(200).send(endereco)

    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }

  /**
   * Delete a endereco with id.
   * DELETE enderecos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const endereco = await Endereco.findOrFail(params.id)

      await endereco.delete()

      return response.status(200).send({message: "Endereço de oferta removido"})
    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }
}

module.exports = EnderecoController
