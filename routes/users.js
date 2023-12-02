import express from 'express';
import { getUser, getUserFriends, addRemoveFriend } from '../controllers/users.js';

import { verifyToken } from '../middleware/auth.js';

/* ROUTES */
const router = express.Router();
router.get('/:id', getUser);
router.get('/:id/friends', verifyToken, getUserFriends);

/* UPDATES */
router.patch('/:id/:friendId', verifyToken, addRemoveFriend);

export default router;
