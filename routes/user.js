import express from 'express';
import userController from '../controller/user';

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;
