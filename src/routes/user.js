module.exports = app => {
  const user = require('../controllers/user')
  const auth = require('../helpers/auth')
  app
    .get('/user', auth.authInfo, auth.accessToken, user.getUsers)
    .get('/user/:id_user', auth.authInfo, auth.accessToken, user.getDetailUser)
    .get('/user/token/:token', auth.authInfo, auth.accessToken, user.getToken)
    .post('/user/register', user.register)
    .post('/user/login', auth.authInfo, user.login)
    .post('/user/logout', auth.authInfo, auth.accessToken, user.logout)
    .delete(
      '/user/delete/:idUser',
      auth.authInfo,
      auth.accessToken,
      user.deleteUsers
    )
}
