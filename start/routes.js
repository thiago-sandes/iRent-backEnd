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

Route.group (() => {
  Route.post('/avaliacaoOfertas', 'AvaliacaoOfertaController.store')
})

Route.group (() => {
  Route.get('/avaliacaoOfertas/:id', 'AvaliacaoOfertaController.show')
  Route.put('/avaliacaoOfertas/:id', 'AvaliacaoOfertaController.update')
})

Route.group (() => {
  Route.post('/avaliacaoAnuncios', 'AvaliacaoAnuncioController.store')
})

Route.group (() => {
  Route.get('/avaliacaoAnuncios/:id', 'AvaliacaoAnuncioController.show')
  Route.put('/avaliacaoAnuncios/:id', 'AvaliacaoAnuncioController.update')
})

Route.post('/sessions', 'SessionController.store')

Route.post('/passwords', 'ForgotPasswordController.store')

Route.get('/app', 'AppController.index').middleware(['auth'])

Route.post('oferta/:id/images', 'ImageController.store')
.middleware('auth')

Route.get('images/:path', 'ImageController.show')
