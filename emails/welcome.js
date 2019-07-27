const hbs = use('handlebars')
const Env = use('Env')

const template = require('./template/welcome.hbs')

const emailConfig = {
    apiKey: Env.get('APP_KEY_MAILGUN'),
    domain: Env.get('DOMAIN')
  }
const mailgun = use('mailgun-js')(emailConfig)

const email = function(user) {
  const html = template(user)

  const data = {
      from: 'rivanildo_junior7@hotmail.com',
      to: user.email,
      subject: 'Welcome to the iRent',
      html: html,
  }

  mailgun.messages().send(data, (error) =>{
    if (error){
      return "error"
    }
  })
}

module.exports = email


