const nodemailer = use('nodemailer')
//const path = require('Path')
//const templateWelcome = path.join(__dirname, '.', 'template')
//const EmailTemplate = require('email-templates').EmailTemplate
//const welcome = new EmailTemplate(templateWelcome)
const hbs = use('handlebars');

const transporte = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'irentufs@gmail.com',
    pass: 'KR4B@f%21F6n'
  }
});

const template = hbs.compile('' + '<h2> Hello {{ name }} </h2>' +
'<p>Welcome to the iRent, your rental search application!</p>' +
'<p>your data:</p>' +
'<ul><li>name: {{name}}</li><li>username: {{username}}</li><li>email: {{email}}</li><li>password: {{password}}</li><li>telephone: {{telephone}}</li><li>sex: {{sex}}</li></ul>' + '');

const email = function(user) {
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

module.exports = email
/*
module.exports = {

    function(user){
        welcome.render(user, function (err, result) {
            if(err){
                console.log(err);
            }
            else{
                var transport = defaultTransport;
                transport.sendMail({
                    from: "irentufs@gmail.com",
                    to: user.email,
                    subject: "Welcome to the iRent",
                    html: result.html
                }, function (err, responseStatus) {
                    if (err) {
                        console.log(err)
                    }
                    else{
                        console.log(responseStatus) // email foi enviado
                    }
                });
            }
        });
    },

}*/


