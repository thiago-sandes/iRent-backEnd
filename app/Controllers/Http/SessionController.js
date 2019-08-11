'use strict'

const User = use("App/Models/User")

class SessionController {
  async store ({ request, auth, response }) {
    try {
      const { username, password } = request.all()

      const token = await auth.attempt(username, password)
      const user = await User.findByOrFail('username', username)

      token['user_id'] = user.id
      return token

    } catch (error) {
      return response.status(error.status).send({message: error})
    }
  }
}

module.exports = SessionController
