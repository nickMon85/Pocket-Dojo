import express from 'express';

import {getPosts, createPosts} from '../Controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/',createPosts);
//This is the 1st step to create Post. Add to 'createPosts' to import.
//Then go to '../controllers/posts.js' to export createPosts.

export default router;
