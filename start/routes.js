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

Route.post('/sessions', 'SessionController.store')

Route.post('/passwords', 'ForgotPasswordController.store')

Route.get('/app', 'AppController.index').middleware(['auth'])
