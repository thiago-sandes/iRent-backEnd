'use strict'

class SessionController {
  async store ({ request, auth }) {
    try {
      const { email, password } = request.all()

      const token = await auth.attempt(email, password)

      return token

    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = SessionController
