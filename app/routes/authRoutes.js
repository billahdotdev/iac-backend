const { verifySignUp } = require('../middlewares')
const authController = require('../controllers/authController')

module.exports = app => {
    app.post('/api/auth/signup', [verifySignUp.checkDuplicateUsernameOrEmail], authController.signUp),
    app.post('/api/auth/signin', [], authController.signIn),
    app.post('/api/auth/signout', [], authController.signOut)
}