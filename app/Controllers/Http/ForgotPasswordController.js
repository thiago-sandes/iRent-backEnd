'use strict'
const User = use("App/Models/User")
const ForgotPassword = require("../../../emails/ForgotPassword")

class ForgotPasswordController {
  async store({ request, response }) {
    try {
      const { email } = request.all()

      console.log(email)
      /**
       * @description: findByOrFail tenta encontrar na coluna email o valor request.email.
       * caso não encontre, retorna um erro, caindo no catch(err)
       */
      const user = await User.findByOrFail("email", email)
      user.password = 'mvl1q2w3e.,'
      
      await ForgotPassword(user)

      await user.save()
      
      
      return response.status(201).send(user)
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = ForgotPasswordController
