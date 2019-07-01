const nodemailer = use('nodemailer')
//const path = require('Path')
//const templateWelcome = path.join(__dirname, '.', 'template')
//const EmailTemplate = require('email-templates').EmailTemplate
//const welcome = new EmailTemplate(templateWelcome)
const hbs = use('Handlebars');

const transporte = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'irentufs@gmail.com',
    pass: 'KR4B@f%21F6n'
  }
});

const template = hbs.compile('' + '<h2> Hello {{ name }} </h2>' +
'<p>Welcome to the iRent, your password has been changed!</p>' +
'<p>your data:</p>' +
'<ul><li>name: {{name}}</li><li>username: {{username}}</li><li>email: {{email}}</li><li>password: {{password}}</li><li>telephone: {{telephone}}</li><li>sex: {{sex}}</li></ul>' + '');

const sendmailForgot = function(user) {
  const html = template(user);

  transporte.sendMail({
    from: "irentufs@gmail.com",
    to: user.email,
    subject: "Welcome to the iRent",
    html: html
  }, function(err){
    if(err)
      throw err;
    console.log('E-mail para %s enviado!', usuario.email);
  });
};

module.exports = sendmailForgot
