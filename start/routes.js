'use strict'
const Route = use('Route')

Route.group (() => {
  Route.get('/users', 'UserController.index')
  Route.post('/users', 'UserController.store')
})

Route.group (() => {

  Route.get('/users/username/:username', 'UserController.show')
  Route.get('/users/id/:id', 'UserController.getById')
  Route.delete('/users/:username', 'UserController.destroy')
  Route.put('/users/:username', 'UserController.update')
})//.middleware('auth')

Route.post('/sessions', 'SessionController.store')

Route.post('/passwords', 'ForgotPasswordController.store')

Route.get('/app', 'AppController.index').middleware(['auth'])

Route.group (() => {
  Route.get('/oferta', 'OfertaController.index')
  Route.post('/oferta', 'OfertaController.store')
})//.middleware('auth')

Route.group (() => {
  Route.get('/oferta/:id', 'OfertaController.show')
  Route.delete('/oferta/:id', 'OfertaController.destroy')
  Route.put('/oferta/:id', 'OfertaController.update')
})//.middleware('auth')

Route.group (() => {
  Route.get('/avaliacaoOfertas', 'AvaliacaoOfertaController.index')
  Route.post('/avaliacaoOfertas', 'AvaliacaoOfertaController.store')
})

Route.group (() => {
  Route.get('/avaliacaoOfertas/:id', 'AvaliacaoOfertaController.show')
  Route.get('/avaliacaoOfertas/:user_id/:oferta_id', 'AvaliacaoOfertaController.getAvaliacaoOferta')
  Route.delete('/avaliacaoOfertas/:id', 'AvaliacaoOfertaController.destroy')
  Route.put('/avaliacaoOfertas/:id', 'AvaliacaoOfertaController.update')
})

  Route.get('/oferta/:id/images', 'ImageController.showImages')
  Route.post('oferta/:id/images', 'ImageController.store')
  //.middleware('auth')

  Route.group (() => {
  Route.get('/anuncio', 'AnuncioController.index')
  Route.post('/anuncio', 'AnuncioController.store')
})//.middleware('auth')

Route.group (() => {
  Route.get('/anuncio/:id', 'AnuncioController.show')
  Route.delete('/anuncio/:id', 'AnuncioController.destroy')
  Route.put('/anuncio/:id', 'AnuncioController.update')
})//.middleware('auth')

  Route.get('/images/:path', 'ImageController.show')
