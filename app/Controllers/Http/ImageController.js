'use strict'

const Helpers = use('Helpers')
const Oferta = use('App/Models/Oferta')


class ImageController {
  /**
   * Create/save a new image.
   * POST images
   */
  async store ({ params,request }) {
    const oferta = await Oferta.findOrFail(params.id)

  const images = request.file('image', {
    types: ['image'],
    size: '2mb'
  })

  await images.moveAll(Helpers.tmpPath('uploads'), file => ({
    name: `${Date.now()}-${file.clientName}`
  }))

  if (!images.movedAll()) {
    return images.errors()
  }

  await Promise.all(
    images
      .movedList()
      .map(image => oferta.images().create({ path: image.fileName }))
  )
  }

  async show ({ params, response }) {
    return response.download(Helpers.tmpPath(`uploads/${params.path}`))
  }
}

module.exports = ImageController
