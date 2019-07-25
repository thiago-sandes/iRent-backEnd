'use strict'

class SessionController {
  async store ({ request, auth, response }) {
    try {
      const { username, password } = request.all()

      const token = await auth.attempt(username, password)

      return token

    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }
}

module.exports = SessionController
