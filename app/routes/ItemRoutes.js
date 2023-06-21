const controller = require('../controllers/itemController')
const { authJwt } = require('../middlewares')

module.exports = app => {
    app.get('/items', [], controller.get)
    app.get('/items/:id', [], controller.getById)
    app.post('/items', [], controller.create)
    app.put('/items/:id', [authJwt.verifyToken], controller.update)
    app.delete('/items/:id', [], controller.delete)
}