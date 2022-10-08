import Container from 'typedi';
import UserController from '../controllers/UserController';
import express from 'express';

const router = express();
const userController = Container.get(UserController);

router.get('/', (req, res) => userController.getAllUsers(req, res));
router.get('/random', (req, res) => userController.getRandomUsers(req, res));

export default router;