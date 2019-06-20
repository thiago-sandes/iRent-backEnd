'use strict'

const Route = use('Route')

Route.resource('users', 'UserController')
  .only(['store', 'show', 'update'])
  .middleware(new Map([
    [['update', 'show'], ['auth']]
  ]))

Route.post('/sessions', 'SessionController.store')

Route.get('/app', 'AppController.index').middleware(['auth'])
