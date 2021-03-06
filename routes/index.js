const express = require('express');
const router = express.Router();
const {catchErrors} = require('../handlers/errorHandlers')
const check = require('../middlewares/check')
const postsController = require('../controllers/postsController')
const commentsController = require('../controllers/commentsController')
const authController = require('../controllers/authController')

// posts
router.get('/', catchErrors(postsController.posts))
router.get('/posts', catchErrors(postsController.posts))
router.post('/posts/create', check.isLogin, catchErrors(postsController.createPost))
router.get('/posts/create', check.isLogin, postsController.createPostPage)
router.get('/posts/:id',  catchErrors(postsController.onePost))
router.get('/posts/:id/edit', check.isLogin, catchErrors(postsController.editPostPage))
router.post('/posts/:id/edit', check.isLogin, catchErrors(postsController.editPost))
router.get('/posts/:id/remove', check.isLogin, catchErrors(postsController.removePost))

// comments
router.post('/comments', check.isLogin, catchErrors(commentsController.addComments))
router.get('/comments/:id/remove', check.isLogin, catchErrors(commentsController.removeComments))

//authenticate
router.get('/login', check.isNotLogin, authController.loginPage)
router.post('/login', check.isNotLogin, authController.login)

router.get('/logout', check.isLogin, authController.logout)

router.get('/signup', check.isNotLogin, authController.signUpPage)
router.post('/signup',
  check.isNotLogin,
  authController.validateRegister,
  catchErrors(authController.signUp),
  authController.login
)

module.exports = router