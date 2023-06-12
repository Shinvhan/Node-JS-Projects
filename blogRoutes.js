const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();

//a blog index route
router.get('/', blogController.blog_index);

// handling a Post request
router.post('/', blogController.blog_create_post);

//blog create path
router.get('/create', blogController.blog_create_get);

// handle blogs:id get req
router.get('/:id', blogController.blog_details);
  
//handle a delete requests
router.delete('/:id', blogController.blog_delete);

module.exports = router;