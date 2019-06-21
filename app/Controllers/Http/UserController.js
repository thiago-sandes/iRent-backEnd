<<<<<<< HEAD
"use strict"

const User = use("App/Models/User")

class UserController {
  async create ({ request }) {
    const data = request.only(["username", "email", "password"])

    const user = await User.create(data)

    return user
  }
}

module.exports = UserController
=======
'use strict'

const User = use("App/Models/User");

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

      return response.status(201).send(user);
    } catch (error) {
      return response.status(error.status).send({message: error})
    }

  }

  async show ({ params, response }) {
    try {
      const user = await User.findOrFail(params.id);

      return response.status(200).send(user);

    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }

  async update ({ params, request, response }) {
    try {
      const user = await User.findOrFail(params.id);

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
      const user = await User.findOrFail(params.id);

      await user.delete();

      return response.status(200).send(user);

    } catch (error) {
      return response.status(error.status).send({message: error})
    }

  }
}

module.exports = UserController;
>>>>>>> 4694a81cce5e3a23d9ac89dd8a31ab2130f57b90
