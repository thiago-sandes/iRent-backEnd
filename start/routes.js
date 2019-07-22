'use strict'
const Route = use('Route')

Route.group (() => {
  Route.get('/users', 'UserController.index')
  Route.post('/users', 'UserController.store')
})

Route.group (() => {
  Route.get('/users/:username', 'UserController.show')
  Route.delete('/users/:username', 'UserController.destroy')
  Route.put('/users/:username', 'UserController.update')
}).middleware(['auth'])

Route.group (() => {
  Route.get('/ofertas', 'OfertaController.index')
  Route.post('/ofertas', 'OfertaController.store')
})

Route.group (() => {
  Route.get('/ofertas/:id', 'OfertaController.show')
  Route.delete('/ofertas/:id', 'OfertaController.destroy')
  Route.put('/ofertas/:id', 'OfertaController.update')
})

Route.post('/sessions', 'SessionController.store')

Route.post('/passwords', 'ForgotPasswordController.store')

Route.get('/app', 'AppController.index').middleware(['auth'])
