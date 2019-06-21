'use strict'

class SessionController {
<<<<<<< HEAD
  async create ({ request, auth }) { 
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    return token
  }
}

module.exports = SessionController
=======
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
>>>>>>> 4694a81cce5e3a23d9ac89dd8a31ab2130f57b90
