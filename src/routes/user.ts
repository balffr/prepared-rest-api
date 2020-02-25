import { Router } from 'express';

import * as userController from '../controllers/user';

const router = Router();

router.post('/signup', userController.postSignup);

router.post('/login', userController.postLogin);

router.delete('/:userId', /* checkAuth, */ userController.postDeleteAccount);

export default router;
