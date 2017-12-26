const express = require('express');
const router = express.Router();
const {catchErrors} = require('../handlers/errorHandlers')
const articleController = require('../controllers/articleController')

router.get('/', catchErrors(articleController.articles))

module.exports = router