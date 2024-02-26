import express from 'express';
import { UserController } from '../controllers/userController';

const router = express.Router();
const userController = new UserController();

router.post('/users', userController.createUser);
router.get('/users/:username', userController.getUserByUsername);
router.get('/users', userController.getAllUsers);

export default router;
