const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const profileController = require('../controllers/profileController');
const postConstoller = require('../controllers/postsController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/users/test', userController.userPage);
router.get('/profile/test', profileController.profilePage);
router.get('/posts/test', postConstoller.postPage);

module.exports = router;

