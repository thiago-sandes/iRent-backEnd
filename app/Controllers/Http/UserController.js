'use strict'

const User = use("App/Models/User");

const emailWelcome = require("../../../emails/welcome")

class UserController {
  async index ({ response, auth }) {
    try {
      const users = await User.all();

      return response.status(200).send(users);

    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }

  async store ({ request, response }) {
    try {
      const data = request.post();

      const user = await User.create(data);

      emailWelcome(user);

      return response.status(201).send(user);
    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }

  async show ({ params, response }) {
    try {
      const user = await User.findByOrFail('username', params.username);

      return response.status(200).send(user);

    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }

  async update ({ params, request, response }) {
    try {
      const user = await User.findByOrFail('username', params.username);

      const data = request.post();

      user.merge(data);

      await user.save();

      return response.status(200).send(user);

    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }

  async destroy ({ params, response }) {
    try {
      const user = await User.findByOrFail('username', params.username);

      await user.delete();

      return response.status(200).send(user);

    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }
}

module.exports = UserController;
