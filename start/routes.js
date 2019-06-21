'use strict'

const Route = use('Route')

<<<<<<< HEAD
Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')

Route.get('/app', 'AppController.index').middleware(['auth'])
=======
Route.resource('users', 'UserController')
  .only(['store', 'show', 'update'])
  .middleware(new Map([
    [['update', 'show'], ['auth']]
  ]))

Route.post('/sessions', 'SessionController.store')

Route.get('/app', 'AppController.index').middleware(['auth'])
>>>>>>> 4694a81cce5e3a23d9ac89dd8a31ab2130f57b90
